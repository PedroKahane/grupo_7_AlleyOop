let dorpdown = document.querySelector(".dropdown")
let profile = document.querySelector("#a_img_log")
let bars = document.querySelector(".burger-menu")
let menu = document.querySelector("#menu_header")


profile.addEventListener("click", function(){
    if (dorpdown.classList.contains('none')) {
        dorpdown.classList.remove('none');
      }else{
        dorpdown.classList.add('none')
      }
})

bars.addEventListener("click", function(){
    if (menu.classList.contains('none_header')) {
        menu.classList.remove('none_header');
      }else{
        menu.classList.add('none_header')
      }
    })