const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const respuesta = document.querySelector(".resultado");
const ejecutar = document.querySelector(".boton");
ejecutar.addEventListener("click", (e) => {
    ;
    e.preventDefault();
    let numMostrar = [];
    let x = num1.value;
    let y = num2.value;
    if (x > y) {
        do {
            x--;
            numMostrar.push(x);
        } while (x > y);
        respuesta.textContent=`${numMostrar}`
    } else if (y > x) {
        do {
            y--;
            numMostrar.push(y);
        } while (y > x);
        respuesta.textContent=`${numMostrar}`
    } else {
        respuesta.textContent=`Son iguales`;
    }
});
