//pasar de la portada a la primera pregunta
// Home > p1   

//ARRAY con OBJETOs Pregunta

const preguntas = [
    {
        pregunta: "Pregunta1",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correcta: "a"
    },
    {
        pregunta: "Pregunta2",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correcta: "a"
    },
    {
        pregunta: "Pregunta3",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correcta: "a"
    },
    {
        pregunta: "Pregunta4",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correcta: "a"
    },
    {
        pregunta: "Pregunta5",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correcta: "a"
    }
]

//Home > p1 >p2 >p3> p4> p5 > hoja respuestas con submit

//FUNCION

const pregunta = document.querySelector("h3");
const opcion1 = document.querySelectorAll("label")[0];
const opcion2 = document.querySelectorAll("label")[1];
const opcion3 = document.querySelectorAll("label")[2];
const opcion4 = document.querySelectorAll("label")[3];

let i = 0;

const fichas = document.getElementsByClassName("ficha");

window.onload = cargarPrimeraVez();

function cargarPregunta() {
    if(i>4){
        return
    }
    pregunta.innerHTML = preguntas[i].pregunta;
    opcion1.innerHTML = preguntas[i].a;
    opcion2.innerHTML = preguntas[i].b;
    opcion3.innerHTML = preguntas[i].b;
    opcion4.innerHTML = preguntas[i].d;
    
    i++;
}

//arreglar event listener de fichas a label !!!!

function cargarPrimeraVez() {
    fichas[0].addEventListener("click", cargarPregunta, true);
    fichas[1].addEventListener("click", cargarPregunta, true);
    fichas[2].addEventListener("click", cargarPregunta, true);
    fichas[3].addEventListener("click", cargarPregunta, true);
    i=0;
    pregunta.innerHTML = preguntas[i].pregunta;
    opcion1.innerHTML = preguntas[i].a;
    opcion2.innerHTML = preguntas[i].b;
    opcion3.innerHTML = preguntas[i].b;
    opcion4.innerHTML = preguntas[i].d;
}






/*
- pintar la nueva pregunta y las cuatro respuestas
- que guarde la respuesta
*/







//Tabla de respuestas



//Al pulsar un boton pase a la siguiente pregunta (Sin terminar)




//que se guarde la respuesta (crear objeto respuesta)




//escribir preguntas (HTML)



//crear objeto respuestas


//crear botón de envío <button class="escondido" type="submit">Comprobar datos</button>



//Evitar que la pagina refresque al pulsar el botón de envío




//Validacion de las respuestas (que todas estén respondidas)




//ultima pantalla con boton y respuestas seleccionadas




//al enviar que las respuestas se pongan del color según sean correctas (verde) o incorrectas (rojo). 



//boton para comenzar de nuevo después de enviar




//pagina bienvenida