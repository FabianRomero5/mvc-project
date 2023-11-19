const { createUser } = require("../services/createUserService");
const catchedAsync = require("../utils/catchedAsync");

const postUserController = catchedAsync(async(req, res)=>{
    const {firstname, lastname, documentType, document, dateOfBirth, placeOfBirth, placeOfResidence, email, phone, userName, password}=req.body;

    const postedUser = await createUser(firstname, lastname, documentType, document, dateOfBirth, placeOfBirth, placeOfResidence, email, phone, userName, password);
   
    if(!postedUser.error){
        console.log(postedUser);
        return res.status(200).json(postedUser)
    }
    else{
        console.log(postedUser);
        return res.status(401).json(postedUser.error)
    }
});

module.exports = postUserController;