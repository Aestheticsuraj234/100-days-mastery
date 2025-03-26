const menutoggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menutoggle.addEventListener("click" , ()=>{
    mobileMenu.classList.toggle("hidden")
})