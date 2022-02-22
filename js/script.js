//1 validaremos formulario con js al enviar
document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();//detiene envio formulario
    //Inserta en un array las respuesta seleccionada
    const respuestasUsuario = [];

    const numPreguntas = document.getElementsByTagName("fieldset").length;

    for (let i = 0; i < numPreguntas * 4; i += 4) {
        if (document.getElementsByTagName("input")[i].checked) {
            respuestasUsuario.push("a");
        } else if (document.getElementsByTagName("input")[i + 1].checked) {
            respuestasUsuario.push("b");
        } else if (document.getElementsByTagName("input")[i + 2].checked) {
            respuestasUsuario.push("c");
        } else if (document.getElementsByTagName("input")[i + 3].checked) {
            respuestasUsuario.push("d");
        }
    }
    console.log(respuestasUsuario);
    //Imprime por consola respuesta correcta
    const hojaRespuestas = ["a", "a", "b", "c", "a", "d", "c", "a", "c", "d"];

    for (j = 0; j < 10; j++) {
        if (hojaRespuestas[j] == respuestasUsuario[j]) {
            console.log("respuesta " + (j + 1) + " correcta.");
        } else {
            console.log("respuesta " + (j + 1) + " incorrecta.");
        }
    }
    //let k = 0; k < numPreguntas * 4; k += 4
    //Pone en color verde la respuesta si se ha acertado o en rojo si se ha fallado
    //démosle un repasito al bucle que itera "x" ;)

    //******!!!! HAY QUE REHACER ESTA HARDCODEADA!!!!******
    let iterator = 1;
    for (let x = 0; x < 40; x++) {
        for (let k = iterator; k <= numPreguntas.length * 4; k += 4) {
            console.log(hojaRespuestas);
            console.log(respuestasUsuario + "oficiales");
            if (document.getElementsByTagName("input")[k-1].checked) {
                if (document.getElementsByTagName("input")[k-1].value === hojaRespuestas[x]) {
                    document.querySelectorAll(".ficha")[k-1].style.backgroundColor = "green";
                } else {
                    document.querySelectorAll(".ficha")[k-1].style.backgroundColor = "red";
                }
            }
            else if (document.getElementsByTagName("input")[k].checked) {
                if (document.getElementsByTagName("input")[k].value === hojaRespuestas[x]) {
                    document.querySelectorAll(".ficha")[k].style.backgroundColor = "green";
                } else {
                    document.querySelectorAll(".ficha")[k].style.backgroundColor = "red";
                }
            }
            else if (document.getElementsByTagName("input")[k + 1].checked) {
                if (document.getElementsByTagName("input")[k + 1].value === hojaRespuestas[x]) {
                    document.querySelectorAll(".ficha")[k + 1].style.backgroundColor = "green";
                } else {
                    document.querySelectorAll(".ficha")[k + 1].style.backgroundColor = "red";
                }
            }
            else if (document.getElementsByTagName("input")[k + 2].checked) {
                if (document.getElementsByTagName("input")[k + 2].value === hojaRespuestas[x]) {
                    document.querySelectorAll(".ficha")[k + 2].style.backgroundColor = "green";
                } else {
                    document.querySelectorAll(".ficha")[k + 2].style.backgroundColor = "red";
                }
            }
            if (k%4==0){
                continue
            }
        }
        iterator+=4;
    }
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
});



































// seleccionar respuesta (border) addEventListener click añadir atributo que en css tiene otro color (?)




// guardar valores de preguntas seleccioandas en un array

/* document.getElementById("pregunta");
let respuestasUsuario = [];

function checkButton() {

    const numPreguntas = document.getElementsByTagName("fieldset").length;

    for (i = 0; i < numPreguntas; i+4) {

        if (document.getElementsByTagName("input")[i].checked) {
            respuestasUsuario.push("a");
            console.log("a");
        } else if (document.getElementsByTagName("input")[i + 1].checked) {
            respuestasUsuario.push("b");
            console.log("b");
        } else if (document.getElementsByTagName("input")[i + 2].checked) {
            respuestasUsuario.push("c");
            console.log("c");
        } else if (document.getElementsByTagName("input")[i + 3].checked) {
            respuestasUsuario.push("d");
            console.log("d");
        }
    }
    let enviado = document.getElementById("enviar").value;
    console.log(enviado);

}
 */

// var score = document.querySelector('input[name="scores"]:checked').value;
//alert(score + ' was selected!');

//onSubmit comprobar que se han seleccionado respuestas para todas las preguntas y, si es así, comparar las respuestas seleccionadas con las respuestas que son correctas
/* 
const form = document.querySelector("form");
const bottonSubmit = document.querySelector("button");

bottonSubmit.addEventListener("click", function (event) {
    event.preventDefault()


});
 */