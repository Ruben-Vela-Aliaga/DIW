function onSubmit(form){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
  }
function MostrarGreu(){

  document.getElementById("Grave").classList.add("MostrarGrave");
  document.getElementById("Grave").classList.remove("QuitarGrave");
  document.getElementById("Leve").classList.add("QuitarLeve");



}
function MostrarLeve(){

  document.getElementById("Grave").classList.remove("MostrarGrave");
  document.getElementById("Grave").classList.add("QuitarGrave");
  document.getElementById("Leve").classList.remove("QuitarLeve");



}

window.onload = function(){
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var anyo = fecha.getFullYear(); //obteniendo año
  if(dia<10){
    dia='0'+dia; //agrega cero si el menor de 10
  }
  if(mes<10){
    mes='0'+mes //agrega cero si el menor de 10
  }

  document.getElementById('fechaIncidente').value= anyo+"-"+mes+"-"+dia;
  document.getElementById('fechaAtencion').value= anyo+"-"+mes+"-"+dia;
  document.getElementById('ExtraescolaresIni').value= anyo+"-"+mes+"-"+dia;
  document.getElementById('SuspensionIni').value= anyo+"-"+mes+"-"+dia;

}
  