
{
var themeBtn = document.querySelector(".theme-mode")
var saveBtn = document.querySelector(".save-key")
var noteBtn = document.querySelector(".new-note")
var cancelBtn = document.querySelector(".cancel-key")
var textBox = document.querySelector(".text-box")
var noteList = document.querySelector(".note-holder")
}



reformation(0)
let noteStorage = []
let count = 0

themeBtn.addEventListener("click",darkTheme)
noteBtn.addEventListener("click",startNote)
cancelBtn.addEventListener("click",cancelNote)
saveBtn.addEventListener("click",noteWriting)

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
function noteWriting(){
    
    let item = document.createElement("li")
    let link = document.createElement("a")

    let text = document.createTextNode(textBox.value)
    text.id = `#note-${count}`
    noteStorage.push(text)

    link.appendChild(document.createTextNode(`Note ${count+1}`))
    link.src = `#note-${count}`

    
    item.appendChild(link)
    noteList.appendChild(item)

    textBox.value=" "

    count++
    reformation(0)
}

function startNote(){
reformation(1)
}
function cancelNote(){ reformation(0)}