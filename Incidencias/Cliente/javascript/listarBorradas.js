var Delete="<span class='badge badge-danger'>Eliminada</span>";
var cabecera=false;
$.getJSON( "faltas/faltasBorradas", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
      var fecha=ponerFechabien(val.fechaIncidente);
      if(cabecera==false){
        items.push( "<tr><th>Editar</th><th>Alumno</th><th>Profesor</th><th>Fecha de la Falta</th><th>Estado</th></tr>" );
        cabecera=true;
      }
    if( val.Eliminada == true){
      if(val.nombreAlumno== ""){
        val.nombreAlumno="Sin nombre";
        
      items.push( "<tr id='"+key+"'><td><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></td> id='" + key + "' class='list-group-item' ><td> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></td><td>"+val.nombreProfessor+"</td><td>"+fecha+"</td><td>"+Delete+"</td></tr>" );
    
    }else{
      items.push( "<tr id='"+key+"'><td><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></td> id='" + key + "' class='list-group-item' ><td> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></td><td>"+val.nombreProfessor+"</td><td>"+fecha+"</td><td>"+Delete+"</td></tr>" );
    }
    }else{
      if(val.nombreAlumno== ""){
        val.nombreAlumno="Sin nombre";
      items.push( "<tr id='"+key+"'><td><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></td> id='" + key + "' class='list-group-item' ><td> <a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></td><td>"+val.nombreProfessor+"</td><td>"+fecha+"</td><td></td></tr>" );
    }else{
      items.push( "<tr id='"+key+"'><td><a  id='Editar"+key+"' onclick='Editar(this)'><img src='../img/editar.png'></a></td> id='" + key + "' class='list-group-item' ><td><a href='detalles.html?id="+val._id+"'>" + val.nombreAlumno + "</a></td><td>"+val.nombreProfessor+"</td><td>"+fecha+"</td><td></td></tr>" );
    }
  }
    
  
     
      
    
  
  
  });
  

 
  $( "<table/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
function menu(){

  if( document.getElementById("menuNavegacion").style.display=="block"){
    document.getElementById("menuNavegacion").style.display="none";
  }else{
    document.getElementById("menuNavegacion").style.display="block";
  }

}


function ponerFechabien(fecha){
  var dia=fecha.split("-")[2];
  var mes=fecha.split("-")[1];;
  var año=fecha.split("-")[0];
  var fechabuena=dia+"-"+mes+"-"+año;
  return fechabuena;
}
function Editar(img){
  //Cojo el abuelo del enlace donde tengo el evento onclick
  var padre= img.parentNode;
  var abuelo=padre.parentNode;
 //listo los hijos que tiene  el abuelo
  var HijoAbuelo= document.getElementById(abuelo.id).childNodes;
   //listo los hijos que tiene  el segundo td que es donde esta el enlace
  var hijoPadre=HijoAbuelo[1].childNodes;
 //cojo el enlace
 var Enlace=hijoPadre[1].href;
 //luego pongo dicha ruta en el enlace donde esta el evento onlclick
 document.getElementById("Editar"+abuelo.id).href=Enlace;

}


