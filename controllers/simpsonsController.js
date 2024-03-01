// Importar el modelo
const simpsonsModel = require('../models/simpsonsModel');

// Función para manejar la solicitud de la página principal
async function mostrarPaginaPrincipal(req, res) {
    try {
        // Obtener un personaje aleatorio de Los Simpsons
        const personaje = await simpsonsModel.obtenerPersonajeAleatorio();
        // Renderizar la vista y pasar los datos del personaje
        res.render('index', { personaje });
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

// Función para manejar la solicitud de adivinar el nombre del personaje
function adivinarNombre(req, res) {
    // Obtener el nombre del personaje de la solicitud
    const nombreUsuario = req.body.nombreUsuario;
    // Obtener el nombre del personaje del objeto de datos
    const nombrePersonaje = req.body.nombrePersonaje;
    // Verificar si el nombre ingresado por el usuario es correcto
    if (nombreUsuario.toLowerCase() === nombrePersonaje.toLowerCase()) {
        res.send('¡Correcto! ¡Has adivinado el nombre del personaje correctamente!');
    } else {
        res.send('Incorrecto. ¡Inténtalo de nuevo!');
    }
}

module.exports = {
    mostrarPaginaPrincipal,
    adivinarNombre
};