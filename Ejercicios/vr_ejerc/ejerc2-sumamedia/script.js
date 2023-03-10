const numeros = [];
const num = document.querySelector("#num");
const boton = document.querySelector(".enviar");
const mostrar = document.querySelector(".numeros");
mostrar.innerHTML = `${numeros}`;
boton.addEventListener("click", (e) => {
    e.preventDefault();
    if (num.value >= 0) {
        numeros.push(num.value);
        mostrar.innerHTML = `${numeros}`;
    } else {
        let suma = 0;
        let prom;
        numeros.forEach(numero => {
            suma += parseInt(numero);
            prom = suma / parseInt(numeros.length);
            mostrar.innerHTML=`La sumatoria es: ${suma}<br>El Promedio es: ${prom}`;
        });
        }
    });
