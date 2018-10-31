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
    tipoDocumentoLeve:req.body.tipoDocumentoLeve,
    tipoDocumentoGrave:req.body.tipoDocumentoGrave,
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
    })

    faltas.save().then(data => {
        res.send(data);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something was wrong creating investigador"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req, res) => {

    Faltas.find().then(faltas => {
        res.send(faltas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un investigador por Id
exports.findOne = (req, res) => {
    Faltas.findById(req.params.alumno)
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador NOT FOUND con ID " + req.params.alumno
                });
            }
            res.send(faltas);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" + req.params.alumno
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.alumno
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
    Faltas.findByIdAndUpdate(req.params.alumno, {
        nombreAlumno:req.body.nombreAlumno || "Ruben",
        grupoAlumno:req.body.grupoAlumno,
        nombreProfessor:req.body.nombreProfessor,
        fechaAtencion:req.body.fechaAtencion,
        horaAtencion:req.body.horaAtencion,
        fechaIncidente:req.body.fechaIncidente,
        horaIncidente:req.body.horaIncidente,
        lugarIncidente:req.body.lugarIncidente,
        DescripcionIncidente:req.body.DescripcionIncidente,
        tipoDocumento:req.body.tipoDocumento,
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
                    message: "Investigador not found with id " + req.params.alumno
                });
            }
            res.send(faltas);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.alumno
                });
            }
            return res.status(500).send({
                message: "Error updating Investigador with id " + req.params.alumno
            });
        });
};

// Borrar un investigador 
exports.delete = (req, res) => {
    Faltas.findByIdAndRemove(req.params.alumno)
        .then(faltas => {
            if (!faltas) {
                return res.status(404).send({
                    message: "Investigador no encontrado " + req.params.alumno
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.alumno
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Investigador with id " + req.params.alumno
            });
        });
};