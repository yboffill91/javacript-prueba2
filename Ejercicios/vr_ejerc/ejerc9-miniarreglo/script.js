
let mostrarNum = document.querySelector(".mostrarNum")
let NUM_ARREGLO = [];
let num = document.querySelector("#num");
let agregar = document.querySelector(".botones");
let ordenar = document.querySelector(".botones1")
let actualizar = document.querySelector(".botones2")
agregar.addEventListener("click",()=>{
    NUM_ARREGLO.push(parseInt(num.value));
    mostrarNum.innerHTML=``;
    mostrarNum.innerHTML=NUM_ARREGLO;
    if (NUM_ARREGLO.length == 6){
        agregar.classList.toggle("visible");
        ordenar.classList.toggle("visible");
        num.classList.toggle("visible");
        num.value="";
    }
});
ordenar.addEventListener("click",()=>{
    
    mostrarNum.innerHTML=` Ascendente => ${NUM_ARREGLO.sort(function(a,b){return a - b})} <br>  Descendente => ${NUM_ARREGLO.sort(function(a,b){return b - a})}`;
    ordenar.classList.toggle("visible");
    actualizar.classList.toggle("visible");
});
actualizar.addEventListener("click",()=>{
    NUM_ARREGLO=[];
    actualizar.classList.toggle("visible");
    agregar.classList.toggle("visible");
    num.classList.toggle("visible")
    mostrarNum.innerHTML=``;
})
