// Importar la biblioteca axios
const axios = require('axios');

// Definir función para obtener un personaje aleatorio de Los Simpsons
async function obtenerPersonajeAleatorio() {
    try {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me');
        return response.data[0];
    } catch (error) {
        throw new Error('Error al obtener el personaje de Los Simpsons:', error.message);
    }
}

module.exports = {
    obtenerPersonajeAleatorio
};