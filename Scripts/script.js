

let themeBtn = document.querySelector(".theme-mode")
themeBtn.addEventListener("click",darkTheme)
function darkTheme(){
    let backdrop = document.querySelector("body")
    backdrop.style.backgroundColor="#2d2932"
    
    themeBtn.removeEventListener("click",darkTheme)
    themeBtn.addEventListener("click",lightTheme)
    themeBtn.style.backgroundColor="#ebebeb"
    themeBtn.innerHTML= "Light Mode"
    themeBtn.style.color="black"
}
function lightTheme(){
    let backdrop = document.querySelector("body")
    backdrop.style.backgroundColor="#ebede4"
    
    themeBtn.removeEventListener("click",lightTheme)
    themeBtn.addEventListener("click",darkTheme)
    themeBtn.style.backgroundColor="#2d2932"
    themeBtn.innerHTML= "Dark Mode"
    themeBtn.style.color="white"
}