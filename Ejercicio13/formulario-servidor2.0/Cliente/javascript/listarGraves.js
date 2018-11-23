$.getJSON( "http://localhost:4000/faltas/faltasGraves", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'><a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
function RedirigirHtml(){
  document.getElementById("leves").href="http://localhost:4000/listarLeves.html";
}
