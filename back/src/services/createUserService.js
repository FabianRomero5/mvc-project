const { Users, PlaceOfResidences, DocumentTypes } = require("../db");
const { Op } = require('sequelize');


const createUser = async (
  firstname,
  lastname,
  docType,
  document,
  dateOfBirth,
  placeOfBirth,
  placeOfResidence,
  email,
  phone,
  userName,
  password
) => {
  try {
    // Validar si el nombre de usuario, correo o documento ya existen en la base de datos
    const existingUser = await Users.findOne({
      where: {
        [Op.or]: [
          { userName: userName },
          { email: email },
          { document: document }
        ]
      }
    });
   
    if (existingUser) {
      return { error: 'El nombre de usuario, correo o documento ya existe en la base de datos', status: 400 };
    }

    // Buscar o crear el tipo de documento
    const [documentType, createdDocumentType] = await DocumentTypes.findOrCreate({
      where: { name: docType },
      defaults: { name: docType } 
    });

    // Buscar o crear el lugar de residencia
    const [residence, createdResidence] = await PlaceOfResidences.findOrCreate({
      where: { name: placeOfResidence },
      defaults: { name: placeOfResidence } 
    });

    // Crear el nuevo usuario si no existe
    const [newUser, createdUser] = await Users.findOrCreate({
      where: { document: document },
      defaults: {
        firstname,
        lastname,
        document,
        dateOfBirth,
        placeOfBirth,
        email,
        phone,
        userName,
        password,
        documentTypeId: documentType.id,
        placeOfResidenceId: residence.id,
      },
    });

    return newUser;
  } catch (error) {
    // Manejar errores y devolver un objeto de error
    return { error: error.message + ' occurred in service' };
  }
};

module.exports = {
  createUser
};
