let frente = document.querySelector(".frente")
let espalda = document.querySelector(".espalda")
let frenteSrc = document.querySelector(".frente").src
let espaldaSrc = document.querySelector(".espalda").src
let contenedor = document.querySelector(".contenedor_img")
let original = document.querySelector(".original")
const img = document.querySelector("#producto_principal")
const icon = document.getElementById("cancel_icon")


frente.addEventListener("click", function() {
    const producto_principal = document.querySelector("#producto_principal")
    producto_principal.src = frenteSrc
    console.log(producto_principal.src);
})

espalda.addEventListener("click", function() {
    const producto_principal = document.querySelector("#producto_principal")
    console.log(producto_principal);
    producto_principal.src = espaldaSrc
})

img.addEventListener("click", evento => {
    const elemento = evento.target
    const source = elemento.getAttribute("src")
    original.setAttribute("src", source)
    contenedor.classList.add("show")
    contenedor.classList.remove("none")
})

icon.addEventListener("click",function(){
    contenedor.classList.remove("show")
    contenedor.classList.add("none")
})

window.addEventListener("keydown", evento => {
    const key = evento.key

    if(key == "Escape" && contenedor.classList.contains("show")){
        contenedor.classList.remove("show")
        contenedor.classList.add("none")
    }
})