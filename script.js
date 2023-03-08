let toggleBtn =document.querySelector('.toggleBtn')
let container=document.querySelector('.container')
toggleBtn.onclick=function(){
    container.classList.toggle('active')
}

// //cada vez que yo sobre toggleBtn  le de click = decimos que ejecute la funcion
// toggleBtn.onclick=function () {
// container.classList.toggle("active")
// }
// //enlista todas las clases que tengas en el container y ubicame el toggle(metodo de js)   este toggle se activa con la clase active