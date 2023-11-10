const buttonOrange= document.querySelector('.button')
let numeroSeleccionado=document.querySelector(".numeroSeleccionado")
let submitBtnOrange=document.querySelector(".buttonOrange")
let firstCard=document.querySelector(".seccion1")
let secondCard=document.querySelector(".seccion2") 
let spans = document.querySelector('.bolwsNumbers')
spans.addEventListener("click",event=>{//cuando el usuario hace click ,hacemos una escucha general al elemento padre y despues mediante event no didrjimos event -target-innerText y esto los metemos dentro de una variable para asi ver donde realmente se hace el click .(si no hacemos esto y pulsamos entre los botones tambien nos marca como que hemos heccho click)

   let numberselected=event.target.innerText//number selected es la variabble en la que metemos donde del elemento padre spans hemos hecho click y lo guarda .
   numeroSeleccionado.innerHTML=numberselected//ahora dicho numero lo metemos dentro de otra variable global para poder utilizarlo y cuando lo hagamos click se muestre dicho numero en la siguiente tarjeta
   console.log(numberselected)
})

  
  


submitBtnOrange.addEventListener("click",()=>{
   firstCard.style.display="none";
   secondCard.style.display="block";

})