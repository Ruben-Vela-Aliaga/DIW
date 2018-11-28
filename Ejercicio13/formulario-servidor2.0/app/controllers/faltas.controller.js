
const Faltas = require('../models/faltas.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el Investigador
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "Investigador Vacio..."
        });
    }

    const faltas = new Faltas({
    nombreAlumno:req.body.nombreAlumno,
    grupoAlumno:req.body.grupoAlumno,
    nombreProfessor:req.body.nombreProfessor,
    fechaAtencion:req.body.fechaAtencion,
    horaAtencion:req.body.horaAtencion,
    fechaIncidente:req.body.fechaIncidente,
    horaIncidente:req.body.horaIncidente,
    lugarIncidente:req.body.lugarIncidente,
    DescripcionIncidente:req.body.DescripcionIncidente,
    tipoDocumento:req.body.tipoDocumento,
    documentoGrave:req.body.documentoGrave,
    documentoLeve:req.body.documentoLeve,
    checkboxA:req.body.checkboxA,
    checkboxB:req.body.checkboxB,
    checkboxC:req.body.checkboxC,
    checkboxD:req.body.checkboxD,
    checkboxE:req.body.checkboxE,
    checkboxF:req.body.checkboxF,
    Tareas:req.body.Tareas,
    horaRealizacion:req.body.horaRealizacion,
    ExtraescolaresIni:req.body.ExtraescolaresIni,
    ExtraescolaresFin:req.body.ExtraescolaresFin,
    Asignaturas:req.body.Asignaturas,
    SuspensionIni:req.body.SuspensionIni,
    SupsensionFin:req.body.SupsensionFin,
    SuspensionIni:req.body.SupsensionFin,
    SupsensionFin:req.body.SupsensionFin,
    TipificacionA:req.body.TipificacionA,
    TipificacionB:req.body.TipificacionB,
    TipificacionC:req.body.TipificacionC,
    TipificacionD:req.body.TipificacionD,
    TipificacionE:req.body.TipificacionE,
    TipificacionF:req.body.TipificacionF,
    TipificacionG:req.body.TipificacionG,
    TipificacionH:req.body.TipificacionH,
    TipificacionI:req.body.TipificacionI,
    TipificacionJ:req.body.TipificacionJ,
    TipificacionK:req.body.TipificacionK,
    TipificacionL:req.body.TipificacionL,
    TipificacionM:req.body.TipificacionM,
    TipificacionN:req.body.TipificacionN,
    TipificacionÑ:req.body.TipificacionÑ,
    TipificacionO:req.body.TipificacionO,
    TipificacionP:req.body.TipificacionP,
    TipificacionQ:req.body.TipificacionQ,
    TipificacionR:req.body.TipificacionR,
    TipificacionS:req.body.TipificacionS,
    Tipificacion1A:req.body.Tipificacion1A,
    Tipificacion1B:req.body.Tipificacion1B,
    Tipificacion1C:req.body.Tipificacion1C,
    Tipificacion1D:req.body.Tipificacion1D,
    Tipificacion1E:req.body.Tipificacion1E,
    Tipificacion1F:req.body.Tipificacion1F,
    Tipificacion1G:req.body.Tipificacion1G,
    Tipificacion1H:req.body.Tipificacion1H,
    Tipificacion1I:req.body.Tipificacion1I,
    Tipificacion1J:req.body.Tipificacion1J,
    Tipificacion1K:req.body.Tipificacion1K,
    Tipificacion1L:req.body.Tipificacion1L,
    Tipificacion1M:req.body.Tipificacion1M,
    Tipificacion1N:req.body.Tipificacion1N,
    Tipificacion1Ñ:req.body.Tipificacion1Ñ,
    Tipificacion1O:req.body.Tipificacion1O,
    Tipificacion1P:req.body.Tipificacion1P,
    Eliminada:false,
    FechaEliminacion:"",
    })

    faltas.save().then(data => {
        res.redirect("index.html");
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something was wrong creating investigador"
        });
    });
};



// Obtener todos las investigadores
exports.findAll = (req, res) => {

    Faltas.find().then(faltas => {
        res.send(faltas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};

// Obtener todas las faltas leves
exports.findLeves = (req, res) => {
    Faltas.find({documentoLeve:"on"}).then(faltas => {
        res.send(faltas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};
// Obtener todas las faltas Graves
exports.findGraves = (req, res) => {
    
    Faltas.find({documentoGrave:"on"}).then(faltas => {
        res.send(faltas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};
//Obtener Todas las faltas Borradas
exports.findBorradas = (req, res) => {
   
    Faltas.find({Eliminada:true}).then(faltas => {
        res.send(faltas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un investigador por Id
exports.findOne = (req, res) => {
    Faltas.findById(req.params.faltasId)
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador NOT FOUND con ID " + req.params.faltasId
                });
            }
            res.send(faltas);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" + req.params.faltasId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.faltasId
            });
        });
};




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Investigador vacio"
        });
    }

    // Find note and update it with the request body
    Faltas.findByIdAndUpdate(req.params.faltasId, {
        nombreAlumno:req.body.nombreAlumno,
        grupoAlumno:req.body.grupoAlumno,
        nombreProfessor:req.body.nombreProfessor,
        fechaAtencion:req.body.fechaAtencion,
        horaAtencion:req.body.horaAtencion,
        fechaIncidente:req.body.fechaIncidente,
        horaIncidente:req.body.horaIncidente,
        lugarIncidente:req.body.lugarIncidente,
        DescripcionIncidente:req.body.DescripcionIncidente,
        tipoDocumento:req.body.tipoDocumento,
        documentoGrave:req.body.documentoGrave,
        documentoLeve:req.body.documentoLeve,
        Tareas:req.body.Tareas,
        horaRealizacion:req.body.horaRealizacion,
        ExtraescolaresIni:req.body.ExtraescolaresIni,
        ExtraescolaresFin:req.body.ExtraescolaresFin,
        Asignaturas:req.body.Asignaturas,
        SuspensionIni:req.body.SuspensionIni,
        SupsensionFin:req.body.SupsensionFin,
        TipificacionA:req.body.TipificacionA,
        TipificacionB:req.body.TipificacionB,
        TipificacionC:req.body.TipificacionC,
        TipificacionD:req.body.TipificacionD,
        TipificacionE:req.body.TipificacionE,
        TipificacionF:req.body.TipificacionF,
        TipificacionG:req.body.TipificacionG,
        TipificacionH:req.body.TipificacionH,
        TipificacionI:req.body.TipificacionI,
        TipificacionJ:req.body.TipificacionJ,
        TipificacionK:req.body.TipificacionK,
        TipificacionL:req.body.TipificacionL,
        TipificacionM:req.body.TipificacionM,
        TipificacionN:req.body.TipificacionN,
        TipificacionÑ:req.body.TipificacionÑ,
        TipificacionO:req.body.TipificacionO,
        TipificacionP:req.body.TipificacionP,
        TipificacionQ:req.body.TipificacionQ,
        TipificacionR:req.body.TipificacionR,
        TipificacionS:req.body.TipificacionS,
       
    }, { new: true })
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.faltasId
                });
            }
            res.send(faltas);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.faltasId
                });
            }
            return res.status(500).send({
                message: "Error updating Investigador with id " + req.params.faltasId
            });
        });
};

// Borrar un investigador 
exports.deleteOriginal = (req, res) => {
    Faltas.findByIdAndRemove(req.params.faltasId)
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador no encontrado " + req.params.faltasId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.faltasId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Investigador with id " + req.params.faltasId
            });
        });
    };
        // Marca un investigador  como borrado
       
exports.delete = (req, res) => {
    Faltas.findByIdAndUpdate(req.params.faltasId,{
        Eliminada:true,
        FechaEliminacion:"hoy",
    

    })
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador no encontrado " + req.params.faltasId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.faltasId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Investigador with id " + req.params.faltasId
            });
        });
};


