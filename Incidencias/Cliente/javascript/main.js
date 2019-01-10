var auxId = location.search.substr(1).split("=")[1];
var Leve;
var Grave;
var Eliminada;
var cont=0;
var cabecera=false;
console.log(auxId);

if(auxId!=null){
$.getJSON( "faltas/"+auxId, function( data ) {
    $.each( data, function( key, val ) {

        if(data.hasOwnProperty(key))
        $('input[name='+key+']').val(val);
     
       
       var checkID= $('input[name='+key+']').attr('id');
       console.log(key);
       if(val == "on"){
         if(checkID== "CheckedD"){

         $('input[id='+checkID+']').prop("checked",true);
          Mostrar(checkID,"is"+checkID);
        }else if(checkID== "CheckedE"){
     
          $('input[id='+checkID+']').prop("checked",true);
           Mostrar(checkID,"is"+checkID);
      }else if(checkID== "CheckedF"){
        $('input[id='+checkID+']').prop("checked",true);
         Mostrar(checkID,"is"+checkID);
      }else{
        $('input[id='+checkID+']').prop("checked",true);
      }
        }
      
        if(data.hasOwnProperty(key))
        $('textarea[name='+key+']').val(val);

  });

  /*
  * Cambiar el action del formulario
  */



});
document.addEventListener("DOMContentLoaded",cargar)

//console.log(document.getElementById("Formconvivencia"));

}
/*
function onSubmit(form) {

  var data = JSON.stringify($(form).serializeArray()); //  <-----------
  return false; //don't submit

}*/
function detectarRadioGrave(){

  if(document.getElementById("DocumentoGrave").checked){
    document.getElementById("DocumentoLeve").checked=0;
    document.getElementById("DocumentoGrave").name="documentoGrave";
    document.getElementById("DocumentoLeve").name="tipoDocumento";
  }
 
}

function detectarRadioLeve(){

  if(document.getElementById("DocumentoLeve").checked){
    document.getElementById("DocumentoGrave").checked=0;
    document.getElementById("DocumentoLeve").name="documentoLeve";
    document.getElementById("DocumentoGrave").name="tipoDocumento";
  }
}
 
function regargar() {

window.location="menu.html";
  //window.location.reload(true);

}
function MostrarGreu() {

  document.getElementById("Grave").classList.add("MostrarGrave");
  document.getElementById("Grave").classList.remove("QuitarGrave");
  document.getElementById("Leve").classList.add("QuitarLeve");



}
function Mostrar(idCheck, id) {
  if (document.getElementById(idCheck).checked == 1) {
    document.getElementById(id).classList.add("mostrarD");
    document.getElementById(id).classList.remove("quitarD");
  } else {
    document.getElementById(id).classList.remove("mostrarD");
    document.getElementById(id).classList.add("quitarD");
  }


}

function MostrarLeve() {

  document.getElementById("Grave").classList.remove("MostrarGrave");
  document.getElementById("Grave").classList.add("QuitarGrave");
  document.getElementById("Leve").classList.remove("QuitarLeve");



}
function inicio() {
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth() + 1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var anyo = fecha.getFullYear(); //obteniendo año
  if (dia < 10) {
    dia = '0' + dia; //agrega cero si el menor de 10
  }
  if (mes < 10) {
    mes = '0' + mes //agrega cero si el menor de 10
  }

  document.getElementById('fechaIncidente').value = anyo + "-" + mes + "-" + dia;
  document.getElementById('fechaAtencion').value = anyo + "-" + mes + "-" + dia;
  document.getElementById('ExtraescolaresIni').value = anyo + "-" + mes + "-" + dia;
  document.getElementById('SuspensionIni').value = anyo + "-" + mes + "-" + dia;
  document.getElementById('DocumentoLeve').checked = 1;

}
function menu(){

  if( document.getElementById("menuNavegacion1").style.display=="block"){
    document.getElementById("menuNavegacion1").style.display="none";
  }else{
    document.getElementById("menuNavegacion1").style.display="block";
  }

  
}
function cargar(){
  document.getElementById("Formconvivencia").action="faltas/"+auxId;
}



