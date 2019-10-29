/* Estilo javascript */


/* this function change the visibility of an element identified by its id, the parameter, to visible */
 function show(element){
   document.getElementById(element).style.visibility="visible";
 }
/* this function change the visibility of an element identified by its id, the parameter, to hidden */ 
 function hide(element){
   document.getElementById(element).style.visibility="hidden";
 }
 /* this function makes an audio element identified by its id, the parameter, sound */ 
 function sonar(element){
   document.getElementById(element).play();
 }
 /* this function makes an audio element identified by its id, the parameter, sound */ 
 function parar(element){
   document.getElementById(element).pause();
 }
