var auxId = location.search.substr(1).split("=")[1];
$.getJSON( "http://localhost:3000/faltas/"+auxId, function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "' class='list-group-item' > "+key +":" +val + "</li>" );
    
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divDetalles" );
});

//console.log(auxId);
  //document.getElementsByTagName("form").action="http://localhost:3000/faltas/"+auxId;




function Atras(){
  document.getElementById("Atras").href="http://localhost:3000/listarLeves.html";

}
