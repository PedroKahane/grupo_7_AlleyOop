const formElement = document.forms.editForm
//console.log(formElement);
const inputFilter = Array.from(formElement.elements).filter(elemento => elemento.getAttribute("name") != undefined)
let inputs = inputFilter.filter(elemento => elemento.getAttribute("name") != "talles")
console.log(inputs);



const mensaje = document.getElementById('descripcion');
const contador = document.getElementById('contador')
const error = document.getElementById("error_placeholder")
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/250`;
    if(longitudAct < 15){
        contador.classList.add("error_contador")
        error.innerHTML = "El comentario debe contener minimo 15 caracteres"
        
    } else if(longitudAct > 250){
        contador.classList.add("error_contador")
        error.innerHTML = "El comentario no se puede exceder de los 250 caracteres"
    } else{
        contador.classList.remove("error_contador")
        mensaje.classList.add("success")
        error.innerHTML = null
    }
});

inputs.forEach(input => {
    if(input.getAttribute("type") != "file"){
        input.onblur = (evento) => {
            const target = evento.target;
            const name = target.getAttribute("name");
            const value = target.value
            const field = target.parentElement
            const icon = field.querySelector("i")
            const parent = field.parentElement
            const error = parent.querySelector(".error")
            target.classList.remove("error_front")
            target.classList.add("success")
            icon.classList.add("none")
            error.innerHTML = null

            if(name == "precio"){
                if(value<=0){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none")
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El precio debe ser mayor a 0"
                    icon.classList.remove("fa-check-circle")
                } else{
                    target.classList.add("success")
                    target.classList.remove("error_front")
                    icon.classList.remove("none")
                    icon.classList.remove("fa-exclamation-circle")
                    icon.classList.add("fa-check-circle")
                    error.innerHTML = null
                }
            }
            if(name == "descuento"){
                if(value<0 || value == ""){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none")
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El Descuento debe ser mayor o igual a 0"
                    icon.classList.remove("fa-check-circle")
                }else if(value > 50) {
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none")
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El Descuento No puede ser mayor a 50"
                    icon.classList.remove("fa-check-circle")
                }else{
                    target.classList.add("success")
                    target.classList.remove("error_front")
                    icon.classList.remove("none")
                    icon.classList.remove("fa-exclamation-circle")
                    icon.classList.add("fa-check-circle")
                    error.innerHTML = null
                }
            }
            if(name == "equipo" || name == "jugador"){
                if(value.length < 5 ){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none") 
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El " + name + " debe contener minimo 5 caracteres"
                    icon.classList.remove("fa-check-circle")
                } else if(value.length > 30){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none") 
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El " + name + " no puede contener mas de 30 caracteres"
                    icon.classList.remove("fa-check-circle")
                } else{
                    target.classList.add("success")
                    target.classList.remove("error_front")
                    icon.classList.remove("none")
                    icon.classList.remove("fa-exclamation-circle")
                    icon.classList.add("fa-check-circle")
                    error.innerHTML = null
                }
            }
            if(name == "colors"){
                if(value == ""){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none") 
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "Debes seleccionar un color"
                    icon.classList.remove("fa-check-circle")
                } else {
                    target.classList.add("success")
                    target.classList.remove("error_front")
                    icon.classList.remove("none")
                    icon.classList.remove("fa-exclamation-circle")
                    icon.classList.add("fa-check-circle")
                    error.innerHTML = null
                }
            }
            if(name == "numeroCamiseta"){
                if(value < 0 || value > 100 || value == ""){
                    target.classList.add("error_front")
                    target.classList.remove("success")
                    icon.classList.remove("none") 
                    icon.classList.add("fa-exclamation-circle")
                    error.innerHTML = "El numero no puede ser menor a 0 o mayor a 100"
                    icon.classList.remove("fa-check-circle")
                } else {
                    target.classList.add("success")
                    target.classList.remove("error_front")
                    icon.classList.remove("none")
                    icon.classList.remove("fa-exclamation-circle")
                    icon.classList.add("fa-check-circle")
                    error.innerHTML = null
                }
            }
        }
            

    } else{
        input.onchange = (evento) => {
            const target = evento.target;
            const name = target.getAttribute("name");
            const field = target.parentElement
            const error = field.querySelector(".error")
            error.innerHTML = null
            if(name == "frente" || name == "espalda"){
                const files = target.files
                console.log(files);
                if(files.length > 0){
                    if(files[0].type == "image/jpeg" || files[0].type == "image/jpg" || files[0].type == "image/png" || files[0].type == "image/gif"){
                        error.innerHTML = null
                        target.classList.add("success")
                        target.classList.remove("error")
                        error.innerHTML = null
                    } else{
                        target.classList.add("error")
                        target.classList.remove("success")
                        error.innerHTML = "Debes Subir una imagen en formato jpg, png, jpeg o gif"
                    }
                } else{
                    target.classList.add("error")
                    target.classList.remove("success")
                    error.innerHTML = "Debes Subir una imagen"
                }
            }
        }
    }

})


formElement.onsubmit = (evento) =>{
    evento.preventDefault()
    const target = evento.target;
    const inputs = target.querySelectorAll("input.success")
    const textarea = target.querySelectorAll("textarea.success")
    const select = target.querySelectorAll("select.success")
    console.log(select, textarea, inputs);
    if(inputs.length >= 7 && textarea.length >= 1 && select.length >= 1){ 
        target.submit()
    } else{
        alert("Debes completar todos los campos")
    }
    

}