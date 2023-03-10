const num1 = document.getElementById("num1");
const respuesta = document.querySelector(".resultado");
const ejecutar = document.querySelector(".boton");
ejecutar.addEventListener("click", (e) => {
    e.preventDefault();
    const numMostrar = []
    for (let i = 1; i <= 10; i++){
            let mult = num1.value * i;
            numMostrar.push(mult);
    }
    respuesta.innerHTML=``;
    numMostrar.forEach(numero => {
        let rend = new DocumentFragment;
        rend.textContent=`
        ${numero} 
        `;
        respuesta.appendChild(rend);
    });
    
});