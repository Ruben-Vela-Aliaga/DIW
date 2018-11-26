var Delete="<span class='badge badge-danger'>Eliminada</span>";
$.getJSON( "faltas/faltasGraves", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
  if( val.Eliminada == true){
    if(val.nombreAlumno== ""){
      val.nombreAlumno="Sin nombre";
    items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a>"+Delete+"</li>" );
  }else{
    items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a>"+Delete+"</li>" );
  }
  }else{
    if(val.nombreAlumno== ""){
      val.nombreAlumno="Sin nombre";
    items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></li>" );
  }else{
    items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></li>" );
  }
}
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
function RedirigirHtml(){
  document.getElementById("leves").href="listarLeves.html";
}
document.addEventListener("DOMContentLoaded",cargar);
