function onSubmit(form){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
  }

  function Ayuda(){
      alert("<b>a</b>.Les faltes de  puntualitat injustificades. \n b.Les faltes d'assistència injustificades. \n c.Els actes que alteren el normal desemvolupament"
      +"de les activitats del centre educatiu, especialment els que alteren el normal desemvolupament de les classes. \n d.Els actes d'indisciplina."+
      "e.Els actes d'incorrecció o desconsideració, les injúries i les ofenses contra el membres de la comunitat educativa. \n"+
      "f.El furt o deteriorament intencionat d'inmobles,materials,documentació o recursos del centre.\n"+
      "El furt o deteriorament intencionat dels béns o materials  dels membres de la comunitat educativa");

  }