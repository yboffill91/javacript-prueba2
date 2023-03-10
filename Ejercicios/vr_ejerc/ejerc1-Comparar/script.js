let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let compare=document.querySelector(".boton");
let respuesta = document.querySelector(".resultado")
compare.addEventListener("click",(e)=>{
    e.preventDefault();
    if(num1.value > num2.value){
        respuesta.innerHTML= `<b>${num1.value}</b> es mayor que <b>${num2.value}</b>`;
    } else if (num1.value < num2.value){
        respuesta.innerHTML=  `<b>${num2.value}</b> es mayor que <b>${num1.value}</b>`;
    } else {
        respuesta.innerHTML=  `<b>Son iguales</b>`;
    }
});