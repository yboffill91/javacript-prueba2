let h1 =prompt("Cuanto dinero dispones h1");
let h2 = prompt("Cuanto dinero dispones h2");
let h3 = prompt("Cuanto dinero dispones h3");
function comprarHelados(a) {
    if (a <= 0.6) return `Lo siento pero no te alcanza para nada`;
    else if (a > 0.6 && a <= 1) {
        let vuelto = a - 0.6;
        return `Te alcanza para una paletica u te sobra ${vuelto} de vuelto`;
    } else if (a > 1 && a <= 1.6) {
        let vuelto = a - 1;
        return `Te alcanza para un helado en crema te sobra ${vuelto} de vuelto`;
    } else if (a > 1.6 && a<=1.7){
        let vuelto = a - 1.6;
        return `Te alcanza para una heladix te sobra ${vuelto} de vuelto`;
    } else if (a > 1.7 && a <=1.8){
        let vuelto = a - 1.7;
        return `Te alcanza para un heladio te sobra ${vuelto} de vuelto`;
    } else if (a > 1.8 && a <= 2.9){
        let vuelto = a - 1.8;
                comprarBillete(a);
        return `Te alcanza para helado azul te sobra ${vuelto} de vuelto`;

    } else {
        let vuelto = a - 2.9;
                comprarBillete(a);
        return `Te alcanza para una premium bichotamellado te sobra ${vuelto} de vuelto`;

    }
}
function comprarBillete(a){
    if (a > 1) return console.log("Te alcanza para comprar el billete de la loto");
    else return console.log("No te alcanza para el billete de la loto");
} 

console.log(comprarHelados(h1));
console.log(comprarHelados(h2));
console.log(comprarHelados(h3));