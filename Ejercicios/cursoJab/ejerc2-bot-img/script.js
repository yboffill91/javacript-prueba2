window.onload = inicio;
function inicio() {
    document.querySelector(".botonera").innerHTML = `
    <button class="boton">Boton 1</button>
    <button class="boton">Boton 2</button>
    <button class="boton">Boton 3</button>
    `;
    document.querySelector(".caja").innerHTML = `<img class="img1" src="img.jpg">`;
    let boton=document.querySelectorAll(".boton");
    boton[0].addEventListener("click",()=>{
        let imag = document.querySelector("img");
        imag.classList.toggle("img2");
        boton[0].classList.toggle("hide");
    });
    boton[1].addEventListener("click",()=>{
        let imag = document.querySelector("img");
        imag.classList.toggle("hide");
    })
    boton[2].addEventListener("click",inicio)
}

  
