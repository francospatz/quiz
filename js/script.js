//pasar de la portada a la primera pregunta







//Al pulsar un boton pase a la siguiente pregunta (Sin terminar)
let ficha = document.getElementsByClassName("ficha");
let pregunta = document.getElementsByTagName("fieldset");
let preguntaActiva = 0;



function mostrarSiguiente(event){
    event.target.classList.toggle("escondido");
    event.target[preguntaActiva+1].classList.toggle("escondido");
    preguntaActiva++;

}

ficha.addEventListener("click", mostrarSiguiente());





//que se guarde la respuesta (crear objeto respuesta)




//escribir preguntas (HTML)



//crear objeto respuestas



//Evitar que la pagina refresque al pulsar el botón de envío




//Validacion de las respuestas (que todas estén respondidas)




//ultima pantalla con boton y respuestas seleccionadas




//al enviar que las respuestas se pongan del color según sean correctas (verde) o incorrectas (rojo). 



//boton para comenzar de nuevo después de enviar




//pagina bienvenida