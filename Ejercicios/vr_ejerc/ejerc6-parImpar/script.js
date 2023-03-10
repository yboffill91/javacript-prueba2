const num1 = document.getElementById("num1");
const respuesta = document.querySelector(".resultado");
const ejecutar = document.querySelector(".boton");
ejecutar.addEventListener("click", (e) => {
    ;
    e.preventDefault();
    let x = num1.value;
    if ( isNaN(x) ){
        respuesta.textContent=`Por favor inserte un número`
    } else{
        if (x % 2 == 0){
            respuesta.textContent=`Es un número par`;
        } else {
            respuesta.textContent=`Es un número impar`
        }
    }
});