const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../AppLanding/dist/", "")));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../AppForm/dist/", "")));
app.use(express.static("public"));

// Ruta para el primer HTML (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../AppLanding/dist/", "index.html"));
});

// Ruta para otro HTML con una ruta distinta
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "../AppForm/dist/", "index.html"));
});

// Otras rutas y configuraciones pueden ir aquí...

app.listen(5173, () => {
  console.log("Server started on port 5173");
});

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Server listening at 3001');
  });
});
