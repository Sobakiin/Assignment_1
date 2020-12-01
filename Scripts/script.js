
{
var themeBtn = document.querySelector(".theme-mode")
var saveBtn = document.querySelector(".save-key")
var noteBtn = document.querySelector(".new-note")
var cancelBtn = document.querySelector(".cancel-key")
var textBox = document.querySelector(".text-box")
var noteList = document.querySelector(".note-holder")
}

function reformation(bool){
    if(bool === 0){
        saveBtn.style.visibility = "hidden"
        cancelBtn.style.visibility = "hidden"
        textBox.style.visibility = "hidden"
    }
    if(bool===1){
        saveBtn.style.visibility = "visible"
        cancelBtn.style.visibility = "visible"
        textBox.style.visibility = "visible"
    }
}

reformation(0)
let noteStorage = []
let count = 0

themeBtn.addEventListener("click",darkTheme)
noteBtn.addEventListener("click",startNote)

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

function noteWriting(){
    
    let item = document.createElement("li")
    let link = document.createElement("a")
    
    let  text = textbox.innerHTML
    noteStorage.push(text)

    link.appendChild(document.createTextNode(`Note ${count}`))
    link.src = `#note-${count+1}`
    item.appendChild(link)
    noteList.appendChild(item)

    count++
    
}

function startNote(){
console.log("*ding*")
reformation(1)
}
