
$.getJSON( "http://localhost:3000/faltas/faltasLeves", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
 
    items.push( "<li id='" + key + "' class='list-group-item' > <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></li>" );
    
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

function Eliminar(){
  for ( i =0 ;i<clave;i++){
    console.log(clave);
  document.getElementsByName(form).action="http://localhost:3000/faltas/"+document.getElementById(i).id;
}
}