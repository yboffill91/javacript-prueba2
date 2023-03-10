let deg = 0;
window.onload = inicio;
function inicio(){
    document.querySelector(".deg").innerHTML=`${deg} deg`
    document.querySelector("img").onclick=rotar;
}
function rotar(){
    deg +=5;
    document.querySelector("img").style.transform=`rotate(${deg}deg)`
    document.querySelector(".deg").innerHTML=`${deg} deg`
}
