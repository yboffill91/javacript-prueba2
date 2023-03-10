const num1 = document.getElementById("num1");
const respuesta = document.querySelector(".resultado");
const ejecutar = document.querySelector(".boton");
ejecutar.addEventListener("click", (e) => {
    ;
    e.preventDefault();
    let numMostrar = [];
    let x = num1.value;
    let divisor;
    for (let i=1; i<=x;i++){
        divisor = x % i;
        if (divisor == 0){
            numMostrar.push(i);
        }
        respuesta.textContent=`${numMostrar}`
    }
});
