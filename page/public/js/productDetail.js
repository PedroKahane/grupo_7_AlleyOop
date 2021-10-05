let frente = document.querySelector(".frente")
let espalda = document.querySelector(".espalda")
let frenteSrc = document.querySelector(".frente").getAttribute("src")
let espaldaSrc = document.querySelector(".espalda").getAttribute("src")
let contenedor = document.querySelector(".contenedor_img")
let original = document.querySelector(".original")
const img = document.querySelector("#producto_principal")
const icon = document.getElementById("cancel_icon")
let imagenes = []

imagenes.push(frenteSrc, espaldaSrc)

console.log(imagenes);
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


const arrows = document.querySelectorAll(".arrows")

arrows.forEach((arrow) => {
    arrow.addEventListener("click", evento => {
        const target = evento.target
        const actual = document.querySelector(".contenedor_img img")
        const source = actual.getAttribute("src")
        if(target.className.includes("right")){
            const indice = imagenes.indexOf(source)
            if(indice < imagenes.length -1){
                actual.setAttribute("src", imagenes[indice + 1])
            } else{
                actual.setAttribute("src", imagenes[0])
            }
        }
        if(target.className.includes("left")){
            const indice = imagenes.indexOf(source)
            if(indice > 0){
                actual.setAttribute("src", imagenes[indice - 1])
            } else{
                actual.setAttribute("src", imagenes[imagenes.length -1 ])
            }
        }
    })
})


window.addEventListener("keydown", evento => {
    const target = evento.target
    const actual = document.querySelector(".contenedor_img img")
    const source = actual.getAttribute("src")
    const key = evento.key
    if(key == "ArrowRight" && contenedor.classList.contains("show")){
        const indice = imagenes.indexOf(source)
            if(indice < imagenes.length -1){
                actual.setAttribute("src", imagenes[indice + 1])
            } else{
                actual.setAttribute("src", imagenes[0])
            }
    } else if(key == "ArrowLeft" && contenedor.classList.contains("show")){
        const indice = imagenes.indexOf(source)
            if(indice > 0){
                actual.setAttribute("src", imagenes[indice - 1])
            } else{
                actual.setAttribute("src", imagenes[imagenes.length -1 ])
            }
        }
})