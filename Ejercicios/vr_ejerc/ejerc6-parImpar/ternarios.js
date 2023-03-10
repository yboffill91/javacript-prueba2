
const num = document.querySelector("#num1");
const boton = document.querySelector(".boton");
const resultado = document.querySelector(".resultado");
boton.addEventListener("click", (e) => {
    e.preventDefault();
    let x = isNaN(num.value) ? `Entre un número` : num.value % 2 !== 0 ? `Es impar` : `Es par`;
    resultado.textContent = x;
});
