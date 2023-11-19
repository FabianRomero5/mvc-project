# Proyecto MVC

Implementación del patrón MPA-MVC utilizando Node.js, Sequelize, Axios, pgAdmin, React + Vite y Express.

## Descripción del Proyecto

Breve descripción del proyecto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)
- [PostgreSQL](https://www.postgresql.org/)
- [pgAdmin](https://www.pgadmin.org/) (OPCIONAL/RECOMENDADO)

## Configuración de PostgreSQL

1. **Instalación de PostgreSQL:**
   - Sigue las instrucciones en el [sitio oficial de PostgreSQL](https://www.postgresql.org/download/) para instalar PostgreSQL en tu sistema.

2. **Creación de una Base de Datos:**
   - Abre tu cliente de PostgreSQL (pgAdmin) o utiliza la línea de comandos para crear una nueva base de datos para tu proyecto.

## Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/FabianRomero5/mvc-project.git
Configuración de Variables de Entorno:

Copia el archivo .env.example y renómbralo a .env.
Abre el archivo .env y proporciona los detalles de conexión a tu base de datos PostgreSQL:
env
Copy code
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos

## Instalación de Dependencias:
```bash
  cd mvc-project/back
  npm install
```

## Ejecución de la Aplicación:

```bash
   npm start
```

## Modificando la MPA
Si deseas realizar cambios, dirígete al directorio de la aplicación correspondiente, por ejemplo:

```bash
    cd AppLanding
    npm i
    npm run dev 
```
 - Esto ejecutará un servidor de desarrollo con Vite.
 - Asegúrate de levantar el backend si vas a acceder a la base de datos, por ejemplo, para crear o borrar usuarios.
 
 Una vez estés satisfecho con los cambios, ejecuta:

```bash
 npm run build 
```
- Esto actualizará la carpeta dist.

Contribuciones
Las contribuciones son bienvenidas. Abre un issue o una pull request para sugerencias y correcciones.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.





