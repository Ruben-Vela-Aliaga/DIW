var auxId = location.search.substr(1).split("=")[1];
var Leve;
var Grave;
$.getJSON( "http://localhost:3000/faltas/"+auxId, function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "' class='list-group-item' > "+key +":" +val + "</li>" );
    if(key=="documentoGrave"){
      Grave=val;

    }
    if(key=="documentoLeve"){
      Leve=val;
    }
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divDetalles" );
});

//console.log(auxId);
  //document.getElementsByTagName("form").action="http://localhost:3000/faltas/"+auxId;



function deleteFalta(){
 
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/faltas/"+auxId,
    data: "",
    success: function(msg){
        alert("Data Deleted: " + msg);
      
        
    }
   
});



}
function cambiarHtml(){
  if(Leve=="on"){
    document.getElementById("borrar").href="http://localhost:3000/listarLeves.html";
  }
  if(Grave=="on"){
    document.getElementById("borrar").href="http://localhost:3000/listarGraves.html";
  }

}


function Atras(){
  document.getElementById("Atras").href="http://localhost:3000/listarLeves.html";

}
