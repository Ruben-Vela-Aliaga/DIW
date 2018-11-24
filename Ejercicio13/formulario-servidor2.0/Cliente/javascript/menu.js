function RedirigirHtmlLeve(){
    document.getElementById("leves").href="http://localhost:4000/listarLeves.html";
  }
  function RedirigirHtmlGrave(){
    document.getElementById("graves").href="http://localhost:4000/listarGraves.html";
  }

  function RedirigirHtmlTodas(){
    document.getElementById("todas").href="http://localhost:4000/listarFaltas.html";
  }

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

