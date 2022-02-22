//1 validaremos formulario con js al enviar
document.querySelector("form").addEventListener('submit', function (event) {

    event.preventDefault();//detiene envio formulario

    const numPreguntas = document.getElementsByTagName("fieldset").length;

    for (let i = 0; i < numPreguntas * 4; i++) {
        if (document.getElementsByTagName("input")[i].checked === true || document.getElementsByTagName("input")[i].value === "correcto") {
            document.querySelectorAll(".ficha")[i].style.backgroundColor = "green";
        } else if (document.getElementsByTagName("input")[i].checked === true || document.getElementsByTagName("input")[i].value === "incorrecto") {
            document.querySelectorAll(".ficha")[i].style.backgroundColor = "red";
        }
    }

//document.getElementsByTagName("input")[1].checked

    const filtered = document.getElementsByTagName("input[type='radio']").filter(element => element.checked);


    if (filtered == numPreguntas) {
    } else { console.log("Deben responderse todas las preguntas") }

    /* for (let j = 0; j < inputs.length - 1; i++) {
        let k=0;
        if(inputs[i].checked == true){
            k++;
        }
    }
    if(k<fieldset.lenght){
        
    } */



    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});