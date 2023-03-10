let entGratis = 0;
const evEntrada = (a) => {
    let edad = prompt("Que edad tienes");
    if (edad >= 18 && a >= 8 && entGratis <= 0) {
        entGratis = 1;
        return `Tienes ${edad} y son las ${a}, o sea eres el primero despues de las 8, tienes entrada gratis <hr>`;
    } else if (edad >= 18) {
        return `Tienes ${edad} puedes pasar  <hr>`;
    } else {
        return `No cumples los requisitos de edad  <hr>`
    }
}
document.write(evEntrada(7));
document.write(evEntrada(8));
document.write(evEntrada(9));
document.write(evEntrada(10));
document.write(evEntrada(11));