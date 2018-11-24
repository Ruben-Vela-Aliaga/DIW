module.exports = (app) => {
    const faltas = require('../controllers/faltas.controller.js');

    // Create a new investigadores
    app.post('/faltas', faltas.create);

    // Retrieve all investigadores
    app.get('/faltas', faltas.findAll);

    // Encuentra todas faltas leves
    app.get('/faltas/faltasLeves', faltas.findLeves);
     // Encuentra todas faltas graves
     app.get('/faltas/faltasGraves', faltas.findGraves);
     //Encuentra todas las faltas borradas
     app.get('/faltas/faltasBorradas', faltas.findBorradas);

    // Retrieve a single investigadores with investigadorId
    app.get('/faltas/:faltasId', faltas.findOne);

    // Update a investigadores with investigadorId
    app.put('/faltas/:faltasId', faltas.update);

    // Delete a investigadores with investigadorId
    app.delete('/faltas/:faltasId', faltas.delete);
}