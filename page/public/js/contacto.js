const formElement = document.forms.contacto
//console.log(formElement);
let inputs = Array.from(formElement.elements)

console.log(inputs);
const mensaje = document.getElementById('comentario');
const contador = document.getElementById('contador')
const error = document.getElementById("error_placeholder")
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/250`;
    if(longitudAct < 15){
        contador.classList.add("error_contador")
        error.innerHTML = "El comentario debe contener minimo 15 caracteres"
        error.classList.remove("green")
    } else if(longitudAct > 250){
        contador.classList.add("error_contador")
        error.innerHTML = "El comentario no se puede exceder de los 250 caracteres"
        error.classList.remove("green")
    } else{
        contador.classList.remove("error_contador")
        mensaje.classList.add("success")
        error.innerHTML = "Gracias por dejarnos tu comentario!"
        error.classList.add("green")
    }
});

inputs.forEach(input => {
    input.onblur = (evento) => {
        const target = evento.target;
        const name = target.getAttribute("name");
        const value = target.value
        const field = target.parentElement
        const icon = field.querySelector("i")
        const parent = field.parentElement
        const error = parent.querySelector(".error")
        target.classList.remove("error_front")
        icon.classList.add("none")
        error.innerHTML = null

        if(name == "name"){
            if(value.length < 5 ){
                target.classList.add("error_front")
                target.classList.remove("success_front")
                icon.classList.remove("none")
                icon.classList.add("fa-exclamation-circle")
                error.innerHTML = "El nombre debe contener minimo 5 caracteres"
                icon.classList.remove("fa-check-circle")
                error.classList.remove("green")
            }
            else if(value.length > 30 ){
                target.classList.add("error_front")
                target.classList.remove("success_front")
                icon.classList.remove("none")
                icon.classList.add("fa-exclamation-circle")
                icon.classList.remove("fa-check-circle")
                error.innerHTML = "El nombre no puede contener mas de 30 caracteres"
                error.classList.remove("green")
            } else{
                target.classList.add("success_front")
                target.classList.remove("error_front")
                icon.classList.remove("none")
                icon.classList.remove("fa-exclamation-circle")
                icon.classList.add("fa-check-circle")
                error.innerHTML = "El nombre es valido"
                error.classList.add("green")
            }
        }
        if(name == "mail"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(value).toLowerCase()) ){
                target.classList.add("error_front")
                target.classList.remove("success_front")
                icon.classList.remove("none")
                icon.classList.add("fa-exclamation-circle")
                icon.classList.remove("fa-check-circle")
                error.classList.remove("green")
                error.innerHTML = "El email debe contener un formato de correo valido"
            } else{
                target.classList.add("success_front")
                target.classList.remove("error_front")
                icon.classList.remove("none")
                icon.classList.remove("fa-exclamation-circle")
                icon.classList.add("fa-check-circle")
                error.innerHTML = "El mail es valido"
                error.classList.add("green")
            }
            
        }
    }
})

formElement.onsubmit = (evento) =>{
    evento.preventDefault()
    const target = evento.target;
    const inputs = target.querySelectorAll("input.success_front")
    const textarea = target.querySelectorAll("textarea.success")
    if(inputs.length >= 2 && textarea.length >= 1){
        target.submit()
    } else{
        alert("Completa todos los campos")
    }
    

}
