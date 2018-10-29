module.exports = (app) => {
    const faltas = require('../controllers/faltas.controller.js');

    // Create a new investigadores
    app.post('/faltas', faltas.create);

    // Retrieve all investigadores
    app.get('/faltas', faltas.findAll);

    // Retrieve a single investigadores with investigadorId
    app.get('/faltas/:alumno', faltas.findOne);

    // Update a investigadores with investigadorId
    app.put('/faltas/:alumno', faltas.update);

    // Delete a investigadores with investigadorId
    app.delete('/faltas/:alumno', faltas.delete);
}