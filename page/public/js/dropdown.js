let dorpdown = document.querySelector(".dropdown")
let profile = document.querySelector("#a_img_log")
let bars = document.querySelector(".burger-menu")
let menu = document.querySelector("#menu_header")
window.addEventListener("load", function(){
  dorpdown.classList.remove('none');
})

profile.addEventListener("click", function(){
    if (dorpdown.classList.contains('hidden')) {
        dorpdown.classList.remove('hidden');
        dorpdown.classList.add('show')
      }else{
        dorpdown.classList.add('hidden');
        dorpdown.classList.remove("show")
      }
})

bars.addEventListener("click", function(){
    if (menu.classList.contains('none_header')) {
        menu.classList.remove('none_header');
      }else{
        menu.classList.add('none_header')
      }
    })