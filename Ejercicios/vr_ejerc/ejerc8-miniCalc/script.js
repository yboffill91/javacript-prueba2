
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultado = document.querySelector(".resultado");
let boton = document.querySelectorAll(".boton");
boton[0].addEventListener("click", () => {
    let r = isNaN(num1.value) || isNaN(num2.value) ? `Introduzca Números` : parseInt(num1.value) + parseInt(num2.value);
    resultado.textContent = r;
});
boton[1].addEventListener("click", () => {
    let r = isNaN(num1.value) || isNaN(num2.value) ? `Introduzca Números` : num1.value - num2.value;
    resultado.textContent = r;
});
boton[2].addEventListener("click", () => {
    let r = isNaN(num1.value) || isNaN(num2.value) ? `Introduzca Números` : num1.value * num2.value;
    resultado.textContent = r;
});
boton[3].addEventListener("click", () => {
    let r = isNaN(num1.value) || isNaN(num2.value) ? `Introduzca Números` : num1.value / num2.value;
    resultado.textContent = r;
});
