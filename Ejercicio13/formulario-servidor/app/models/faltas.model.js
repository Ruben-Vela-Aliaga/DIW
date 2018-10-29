const mongoose= require('mongoose');

const FaltasSchema = mongoose.Schema({
    nombreAlumno: String,
        grupoAlumno:String,
        nombreProfessor:String,
        fechaAtencion:String,
        horaAtencion:String,
        fechaIncidente:String,
        horaIncidente:String,
        lugarIncidente:String,
        DescripcionIncidente:String,
        tipoDocumento:String,
        Tareas:String,
        horaRealizacion:String,
        ExtraescolaresIni:String,
        ExtraescolaresFin:String,
        Asignaturas:String,
        SuspensionIni:String,
        SupsensionFin:String,
        TipificacionA:String,
        TipificacionB:String,
        TipificacionC:String,
        TipificacionD:String,
        TipificacionE:String,
        TipificacionF:String,
        TipificacionG:String,
        TipificacionH:String,
        TipificacionI:String,
        TipificacionJ:String,
        TipificacionK:String,
        TipificacionL:String,
        TipificacionM:String,
        TipificacionN:String,
        TipificacionÑ:String,
        TipificacionO:String,
        TipificacionP:String,
        TipificacionQ:String,
        TipificacionR:String,
        TipificacionS:String,
},{
    timestamps:true
});


module.exports = mongoose.model('Faltas',FaltasSchema);