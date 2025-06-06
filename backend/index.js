// Import express
const express = require('express');
// Crear app
const app = express();
// Definimos el puerto
const PORT = 3000;

// Nueva ruta
app.get('/', (req, res) => {
    res.json({mensaje: 'Hola mundo!'});
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log('Servidor arrancado!');
});
