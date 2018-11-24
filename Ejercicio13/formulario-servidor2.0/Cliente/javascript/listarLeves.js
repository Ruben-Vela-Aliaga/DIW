var Delete="<span class='badge badge-danger'>Eliminada</span>";
$.getJSON( "http://localhost:4000/faltas/faltasLeves", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
    if( val.Eliminada == true){
      items.push( "<li id='" + key + "' class='list-group-item' > <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a>"+Delete+"</li>" );
    }else{
      items.push( "<li id='" + key + "' class='list-group-item' > <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></li>" );
    }
    
  
     
      
    
  
  
  });
  

 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});

document.addEventListener("DOMContentLoaded",cargar);
function cargar(){
  document.getElementById("crear").addEventListener("mouseover",cambiarColor);
  document.getElementById("borrar").addEventListener("mouseover",cambiarColor);
  document.getElementById("editar").addEventListener("mouseover",cambiarColor);
  document.getElementById("crear").addEventListener("mouseout",restaurarColor);
  document.getElementById("borrar").addEventListener("mouseout",restaurarColor);
  document.getElementById("editar").addEventListener("mouseout",restaurarColor);

 
}
function cambiarColor(){
  if(this.id=="crear"){
    document.getElementById(this.id).style.color="green";
  }
  
  if(this.id=="editar"){
    document.getElementById(this.id).style.color="yellow";
}
  
  if(this.id=="borrar"){
    document.getElementById(this.id).style.color="red";
}
  
}
function restaurarColor(){

    document.getElementById(this.id).style.color="";
  }
