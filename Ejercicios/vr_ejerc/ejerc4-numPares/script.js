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
    let par;
    if (x > y) {
        do {
            par = x %  2;
            if (par==0){
                numMostrar.push(x);
            } 
            x--; 
        } while (x > y);
        respuesta.textContent=`${numMostrar}`
    } else if (y > x) {
        do {
            par = y % 2;
            if (par == 0){
                numMostrar.push(y);
            }
            y--; 
        } while (y > x);
        respuesta.textContent=`${numMostrar}`
    } else {
        respuesta.textContent=`Son iguales`;
    }
});
