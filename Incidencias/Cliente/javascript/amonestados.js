
document.addEventListener("DOMContentLoaded",cargar);
function cargar(){
    document.getElementById("selector").addEventListener("change",cambiar)
}

 function cambiar(){;
elemento=this.value;
document.getElementById("a").style.order=0;
document.getElementById("b").style.order=0;
document.getElementById("c").style.order=0;
document.getElementById("d").style.order=0;
document.getElementById("e").style.order=0;
document.getElementById("f").style.order=0;
document.getElementById("g").style.order=0;
document.getElementById("h").style.order=0;
document.getElementById("i").style.order=0;
document.getElementById("j").style.order=0;
if(elemento=="Angel"){
    document.getElementById("a").style.order=-1;
}
if(elemento=="Baltasar"){
    document.getElementById("b").style.order=-1;
   }
   if(elemento=="Carlos"){
    document.getElementById("c").style.order=-1;
   }
   if(elemento=="David"){
    document.getElementById("d").style.order=-1;
   }
   if(elemento=="Eulogio"){
    document.getElementById("e").style.order=-1;
   }
   if(elemento=="Fran"){
    document.getElementById("f").style.order=-1;
   }
   if(elemento=="Genaro"){
    document.getElementById("g").style.order=-1;
   }
   if(elemento=="Hector"){
    document.getElementById("h").style.order=-1;
   }
   if(elemento=="Irene"){
    document.getElementById("i").style.order=-1;
   }
   if(elemento=="Joan"){
    document.getElementById("j").style.order=-1;
   }

}