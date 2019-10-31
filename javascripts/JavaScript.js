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

 function mostrarDialogo(){
   if( document.getElementById("Dialogue1").style.visibility == "visible"){
    
    document.getElementById("Dialogue1").style.visibility = "hidden";
    borrar("Dialogue1");
    sonar("KiraLaughR");
    
    
    setTimeout(function(){
      sonar("Scream");
      show("Jumpscare");
      setTimeout (function() {
        document.getElementById("Dialogue2").style.visibility = "visible";
        hide("Jumpscare");
    
        }, 6000 );
      
    }, 5400);
    
    
    
   }else if(document.getElementById("Dialogue2").style.visibility == "visible"){
    document.getElementById("Dialogue2").style.visibility = "hidden";
    document.getElementById("Dialogue3").style.visibility = "visible";

   }
 }

 function borrar(element){
document.getElementById(element).remove();


 }

 function retraso(element){

document.getElementById(element).delay();

 }