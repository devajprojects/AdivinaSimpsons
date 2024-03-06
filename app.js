const express = require('express');
const app = express();
const simpsonsController = require('./controllers/simpsonsController');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Configurar body-parser para analizar los datos del cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Configurar el middleware para manejar los archivos estáticos
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', simpsonsController.mostrarPaginaPrincipal);

// Ruta para manejar la solicitud de adivinar el nombre del personaje
app.post('/adivinar', simpsonsController.adivinarNombre);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
