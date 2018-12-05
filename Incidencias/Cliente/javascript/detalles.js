var auxId = location.search.substr(1).split("=")[1];
var Leve;
var Grave;
var Eliminada;
var cont=0;
var cabecera=false;
$.getJSON( "faltas/"+auxId, function( data ) {
  var items = [];
  if(cabecera==false){
    items.push( "<tr><th>Datos</th><th>Valor</th><th><form id='Formulario' action=''><input type='hidden' name='_method' value='DELETE'> <a id='borrarFalta'onclick='deleteFalta(),cambiarHtml()'><img src='img/boton.png' width='30px'></a></form></th></tr>" );
  }
    $.each( data, function( key, val ) {
    items.push( "<tr id='" + key + "' class='list-group-item' ><td><b> "+key +":</b></td> <td colspan='2'><input id='"+key+cont+"'type='text' size='24%'name='"+key+"' value='"+val+"' disabled></td></tr>" );
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
 
  $( "<table/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divDetalles" );
});

//console.log(auxId);
  //document.getElementsByTagName("form").action="http://localhost:3000/faltas/"+auxId;



function deleteFalta(){
  if(confirm("¿Esta seguro de que desea eliminar la falta con id: "+auxId+" ?") == true){
    $.ajax({
      type: "DELETE",
      url: "faltas/"+auxId,
      data: "",
      success: function(msg){
         
       
          alert("La falta con id :"+auxId+" esta en estado eliminada");
      }
     
  });
  }else{
    
  }
 
 



}

function cambiarHtml(){
  if(Leve=="on"){
    document.getElementById("borrarFalta").href="listarLeves.html";
  }
  if(Grave=="on"){
    document.getElementById("borrarFalta").href="listarGraves.html";
  }

}
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

