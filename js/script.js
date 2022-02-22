//1 validaremos formulario con js al enviar
document.querySelector("form").addEventListener('submit', function (event) {

    event.preventDefault();//detiene envio formulario

    const numPreguntas = document.getElementsByTagName("fieldset").length;

    for (let i = 0; i < numPreguntas * 4; i ++) {
        if (document.getElementsByTagName("input")[i].checked === true || document.getElementsByTagName("input")[i].value === "correcto") {
            document.querySelectorAll(".ficha")[i].style.backgroundColor = "green";
        } else if (document.getElementsByTagName("input")[i].checked === true || document.getElementsByTagName("input")[i].value === "incorrecto") {
            document.querySelectorAll(".ficha")[i].style.backgroundColor = "red";
        }
    }
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
});