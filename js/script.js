document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();

    const numPreguntas = document.getElementsByTagName("fieldset").length;
    let inputs = document.querySelectorAll("input[type='radio']");
    let fichas = document.querySelectorAll(".ficha");
    let contador = 0;

    for (let k = 0; k < inputs.length; k++){
        console.log(inputs[k]);
        if(inputs[k].checked){
            contador += 1;
        }
    }

    if (contador < numPreguntas){
        alert("¡Debes responder a todas las preguntas!");
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        for (j = 0; j < numPreguntas * 4; j++){
            if (inputs[j].checked && inputs[j].value == "correcto"){
                fichas[j].style.backgroundColor = "#058E3F";
            } else if (inputs[j].checked && inputs[j].value == "incorrecto"){
                fichas[j].style.backgroundColor = "#A50104";
            }
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }   
});