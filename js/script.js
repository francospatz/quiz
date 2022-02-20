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
        a: "d",
        b: "e",
        c: "f",
        d: "g",
        correcta: "b"
    },
    {
        pregunta: "Pregunta3",
        a: "g",
        b: "h",
        c: "i",
        d: "j",
        correcta: "c"
    },
    {
        pregunta: "Pregunta4",
        a: "k",
        b: "l",
        c: "m",
        d: "n",
        correcta: "a"
    },
    {
        pregunta: "Pregunta5",
        a: "o",
        b: "p",
        c: "q",
        d: "r",
        correcta: "d"
    }
]

//establece contador de preguntas
let i = 0;

const respuestas = [];// almacena el valor de la respuesta (a,b,c o d)

const respuestaA = () => respuestas.push("a");
const respuestaB = () => respuestas.push("b");
const respuestaC = () => respuestas.push("c");
const respuestaD = () => respuestas.push("d");

//Home > p1 >p2 >p3> p4> p5 > hoja respuestas con submit



const pregunta = document.querySelector("h3");
const opcion1 = document.querySelectorAll("label")[0];
const opcion2 = document.querySelectorAll("label")[1];
const opcion3 = document.querySelectorAll("label")[2];
const opcion4 = document.querySelectorAll("label")[3];


function cargarPregunta() {
    if (i >= preguntas.length) {//si el contador es mayor que el numero de preguntas, llevar a pantalla final de submit
        return
    }
    pregunta.innerHTML = preguntas[i].pregunta;
    opcion1.innerHTML = preguntas[i].a;
    opcion2.innerHTML = preguntas[i].b;
    opcion3.innerHTML = preguntas[i].c;
    opcion4.innerHTML = preguntas[i].d;
   
    i++;
}

pregunta.innerHTML = preguntas[i].pregunta;
opcion1.innerHTML = preguntas[i].a;
opcion2.innerHTML = preguntas[i].b;
opcion3.innerHTML = preguntas[i].c;
opcion4.innerHTML = preguntas[i].d;

//eventos para cargar siguiente pregunta
opcion1.addEventListener("click", cargarPregunta);
opcion2.addEventListener("click", cargarPregunta);
opcion3.addEventListener("click", cargarPregunta);
opcion4.addEventListener("click", cargarPregunta);

//eventos para almacenar respuesta 
opcion1.addEventListener("click", respuestaA);
opcion2.addEventListener("click", respuestaB);
opcion3.addEventListener("click", respuestaC);
opcion4.addEventListener("click", respuestaD);

i++;


const correctas = [];

//la corrección aún no funciona
function correccion(arrRespuestas){//toma el array respuestas
    for (i=0;i<respuestas.lenght;i++){
        if(respuesta[i] === preguntas[i].correcta){//compara cada posicion con la propiedad correcta del objeto preguntas
            correctas.push(true);
        }else{
            correctas.push(false);
        }
    }
console.log(correctas);
}


/*
- que guarde la respuesta




if(/*respuesta clicada == pregunta[i].correcta){
    respuestas.push(true);
}

function guardaRespuesta

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