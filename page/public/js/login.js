const formElement = document.forms.form_login

const inputs = Array.from(formElement.elements).filter(elemento => elemento.getAttribute("type") != undefined);
console.log(inputs);
inputs.forEach(input => {

    input.onblur = (evento) =>{
        const target = evento.target;
        const name = target.getAttribute("name");
        const value = target.value
        const field = target.parentElement
        const parent = field.parentElement
        const icon = field.querySelector("i")
        const error = parent.querySelector(".error")
        target.classList.remove("error_front")
        icon.classList.add("none")
        error.innerHTML = null
        
        if(name == "email"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(target);
            if(!re.test(String(value).toLowerCase()) ){
                target.classList.add("error_front")
                target.classList.remove("success")
                icon.classList.remove("none")
                icon.classList.add("fa-exclamation-circle")
                error.innerHTML = "El Correo electronico debe contener un formato valido"
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

        if(name == "password"){
            
            if(value.length < 8){
                target.classList.add("error_front")
                target.classList.remove("success")
                icon.classList.remove("none")
                icon.classList.add("fa-exclamation-circle")
                error.innerHTML = "Debe contener al menos 8 caracteres"
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
    }
})

formElement.onsubmit = (evento) =>{
    evento.preventDefault()
    const target = evento.target;
    const inputs = target.querySelectorAll("input.success")
    console.log(inputs);
    if(inputs.length >= 2){
        target.submit()
    } else{
        alert("Completa todos los campos")
    }
    

}