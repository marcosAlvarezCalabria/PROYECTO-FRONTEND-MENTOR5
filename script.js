const buttonOrange= document.querySelector('.button')
let numeroSeleccionado=document.querySelector(".numeroSeleccionado")
let submitBtnOrange=document.querySelector(".buttonOrange")
let firstCard=document.querySelector(".seccion1")
let secondCard=document.querySelector(".seccion2") 
let spans = document.querySelector('.bolwsNumbers')
spans.addEventListener("click",event=>{//cuando el usuario hace click ,hacemos una escucha general al elemento padre y despues mediante event no didrjimos event -target-innerText y esto los metemos dentro de una variable para asi ver donde realmente se hace el click .(si no hacemos esto y pulsamos entre los botones tambien nos marca como que hemos heccho click)

   let numberselected=event.target.innerText//number selected es la variabble en la que metemos donde del elemento padre spans hemos hecho click y lo guarda .
   numeroSeleccionado.innerText=numberselected//ahora dicho numero lo metemos dentro de otra variable global para poder utilizarlo y cuando lo hagamos click se muestre dicho numero en la siguiente tarjeta
   console.log(numberselected)
   if (numberselected>0&&numberselected<6) {//ahora hacemos que ,si numero seleccinado es mayor a cero y menos 6 la funcion de mostrar una tarjeta y esconder la otra se realizara pero si no es asi seguira como esta para que no pase a la otra tarjeta sin haber sellecionado.
      submitBtnOrange.addEventListener("click",()=>{//si hacemos click sobre submitOrange que es el botoon naranja laa primera tarjeta se escondera y mostrara la segunda .
         firstCard.style.display="none";
         secondCard.style.display="block";
      
      })
   }
   
})

  


