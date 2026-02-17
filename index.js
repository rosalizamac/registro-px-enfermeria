const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
console.log("ESTE ES MI ARCHIVO CORRECTO");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
function registrarAcceso(ruta) {
  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString();
  const texto = `${fecha} - ${hora} - Ruta: ${ruta}\n`;

  const rutaArchivo = path.join(__dirname, 'logs', 'log.txt');

  fs.appendFile(rutaArchivo, texto, (err) => {
    if (err) {
      console.error("Error al escribir en el log");
    }
  });
  }
// Ruta principal
app.get('/', (req, res) => {
  registrarAcceso('/');
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/status', (req, res) => {
  registrarAcceso('/status');
  res.send("Servidor funcionando correctamente");
});
// Ruta del formulario
app.post('/registro', (req, res) => {
    console.log(req.body);
    res.send("Paciente registrado correctamente");
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Servidor activo en http://localhost:3000");
});