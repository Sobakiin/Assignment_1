

let themeBtn = document.querySelector(".theme-mode")
let saveBtn = document.querySelector(".save-key")
let noteBtn = document.querySelector(".new-note")
let cancelBtn = document.querySelector(".cancel-key")
let textBox = document.querySelector(".text-box")


themeBtn.addEventListener("click",darkTheme)
function darkTheme(){
    let backdrop = document.querySelector("body")
    backdrop.style.backgroundColor="#2d2932"
    saveBtn.style.backgroundColor="darkgrey"
    noteBtn.style.backgroundColor="darkgrey" 
    cancelBtn.style.backgroundColor="darkgrey"
    textBox.style.backgroundColor="black"
    textBox.style.color="white"

    themeBtn.removeEventListener("click",darkTheme)
    themeBtn.addEventListener("click",lightTheme)
    themeBtn.style.backgroundColor="#ebebeb"
    themeBtn.innerHTML= "Light Mode"
    themeBtn.style.color="black"
}
function lightTheme(){
    let backdrop = document.querySelector("body")
    backdrop.style.backgroundColor="#ebede4"
    saveBtn.style.backgroundColor="green"
    noteBtn.style.backgroundColor="azure" 
    cancelBtn.style.backgroundColor="lightcoral"
    textBox.style.backgroundColor="white"
    textBox.style.color="black"
    
    themeBtn.removeEventListener("click",lightTheme)
    themeBtn.addEventListener("click",darkTheme)
    themeBtn.style.backgroundColor="#2d2932"
    themeBtn.innerHTML= "Dark Mode"
    themeBtn.style.color="white"
}