var auxId = location.search.substr(1).split("=")[1];
var Leve;
var Grave;
var Eliminada;
var cont=0;
$.getJSON( "faltas/"+auxId, function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "' class='list-group-item' ><b> "+key +":</b> <input id='"+key+cont+"'type='text' size='24%'name='"+key+"' value='"+val+"' disabled></li>" );
    if(key=="Eliminada"){
      Eliminada=val;
    }
    if(key=="documentoGrave"){
      Grave=val;

    }
    if(key=="documentoLeve"){
      Leve=val;
    }
    cont++;
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
    url: "faltas/"+auxId,
    data: "",
    success: function(msg){
       
     
        
    }
   
});



}

function cambiarHtml(){
  if(Leve=="on"){
    document.getElementById("borrarFalta").href="listarLeves.html";
  }
  if(Grave=="on"){
    document.getElementById("borrarFalta").href="listarGraves.html";
  }

}

