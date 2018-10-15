function onSubmit(form){
    
    var data = JSON.stringify( $(form).serializeArray() ); //  <-----------
    console.log( data );
    return false; //don't submit
  }

  function Ayuda(){
      
      alert("a.- Les faltes de  puntualitat injustificades. \n b.- Les faltes d'assistència injustificades. \n c.- Els actes que alteren el normal desemvolupament"
      +"de les activitats del centre educatiu, especialment els que alteren el normal desemvolupament de les classes. \n d.Els actes d'indisciplina. \n"+
      "e.- Els actes d'incorrecció o desconsideració, les injúries i les ofenses contra el membres de la comunitat educativa. \n"+
      "f.- El furt o deteriorament intencionat d'inmobles,materials,documentació o recursos del centre.\n"+
      "g.- El furt o deteriorament intencionat dels béns o materials  dels membres de la comunitat educativa \n"+
      "h.- Les accions que puguen ser perjudicials per a la integritat i la salut dels membres de la comunitat educativa. \n"+
      "i.- La negativa sisteàtica a portar el material necessari per al desenvolupament del procés d'ensenyament-aprenentatge. \n"+
      "j.- La negativa a traslladar la informació facilitada als pares, mares, tutors, o tutores per part del centre i viceversa. \n"+
      "k.- L'alteració o manipulació de la documentació facilitada als ares, mares, tutors o tutores per part del centre \n"+
        "l.- La suplantació de la personalitat dels membres de la comunitat escolar \n"+
        "m.- La utilizació inadequada de les tecnologies de la informació i comunicació durant les activitats que es realitzen en el centre educatiu \n"+
      "n.- L'us de telèfons mòbils, aparells de so i altres aparells electrònics aliens al procés d'ensenyament-aprenentatge. Durant les activitats que es realitzen en el centre educatiu. \n"+
      "o.- Els actes que dificulten o impedisquen el dret i el deure de l'estudi dels seus companys i companyes. \n "+
      "p.- La incitació o estimul a cometre una falta contrària a les normes de convivència. \n"+
      "q.- La negativa al compliment de les mesures correctores adoptades davant de conductes contràries a les normes de convivència. \n"+
      "r.- L'us inadequat de les infrastructures i béns o equips materials del centre. \n "+
      "s.- La desobediència en el compliment de les normes de carácter propi del centre i que estiguen incloses en el seu projecte educatiu.");

  }
