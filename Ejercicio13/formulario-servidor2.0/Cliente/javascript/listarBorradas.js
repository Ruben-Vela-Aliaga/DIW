var Delete="<span class='badge badge-danger'>Eliminada</span>";
$.getJSON( "faltas/faltasBorradas", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
      if( val.Eliminada == true){
        if(val.nombreAlumno== ""){
          val.nombreAlumno="Sin nombre";
        items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a>"+Delete+"</li>" );
      
      }else{
        items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a>"+Delete+"</li>" );
      }
      }else{
        if(val.nombreAlumno== ""){
          val.nombreAlumno="Sin nombre";
        items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></li>" );
      }else{
        items.push( "<li id='" + key + "' class='list-group-item' ><b>Alumno :</b> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></li>" );
      }
    }
    
  
     
      
    
  
  
  });
  

 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
function Editar(img){
  var padre= document.getElementById(img.id).parentNode;
 
  var Hijo= document.getElementById(padre.id).childNodes;

 var idFalta=Hijo[2].href;

 document.getElementById("Editar"+padre.id).href=idFalta;



 

}
document.addEventListener("DOMContentLoaded",cargar);

