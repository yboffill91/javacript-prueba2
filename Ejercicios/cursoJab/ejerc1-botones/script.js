let bot1=document.querySelectorAll(".boton");
bot1[0].addEventListener("click",()=>{
   document.querySelector(".caja").innerHTML=`<h1>Hola Mundo</h1>`;
});
bot1[1].addEventListener("click",()=>{
    document.querySelector(".caja").innerHTML=``;
    document.querySelector(".caja").innerHTML=`<img src="img.jpg">`
});
bot1[2].addEventListener("click",()=>{
    document.querySelector(".caja").innerHTML+=`<button class="boton">Boton Nuevo</button>`
});
bot1[3].addEventListener("click",()=>{
    document.querySelector(".caja").innerHTML=``;
})
