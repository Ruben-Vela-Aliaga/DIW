var id;
$.getJSON( "http://localhost:3000/faltas/faltasLeves", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
 
    items.push( "<li id='" + key + "' class='list-group-item' > <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a> <span id='"+key+key+"' class='badge badge-warning'>Eliminado</span></li>" );
if(val.Eliminada==true){
id=key;


}
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
