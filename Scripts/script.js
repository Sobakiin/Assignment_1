// This isolated block is so I can condense
// all the query selectors into one easy to read area
{
var themeBtn = document.querySelector(".theme-mode")
var saveBtn = document.querySelector(".save-key")
var noteBtn = document.querySelector(".new-note")
var cancelBtn = document.querySelector(".cancel-key")
var textBox = document.querySelector(".text-box")
var noteList = document.querySelector(".note-holder")
var writingArea = document.querySelector(".grid-second")
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
        writingArea.removeChild(textBox)
    }
    if(bool===1){
        saveBtn.style.visibility = "visible"
        cancelBtn.style.visibility = "visible"
        writingArea.appendChild(textBox)
    }
}
function noteWriting(){
    
    let item = document.createElement("li")
    let link = document.createElement("a")

    let text = document.createTextNode(textBox.value)
    console.log(text)
    noteStorage.push([String(textBox.value), `#note${count}`] )

    link.appendChild(document.createTextNode(`Note ${count+1}`))
    link.href = `#note${count}`
    link.id = `#note${count}`
    link.addEventListener("click",runThatBack)
    
    item.appendChild(link)
    noteList.appendChild(item)

    textBox.value=""

    count++
    reformation(0)
}

function startNote(){
    reformation(1)
    //textBox.placeholder = "This is a placeholder"
}
function cancelNote(){ 
    reformation(0)
    textBox.value=""
}

function runThatBack(eve){
    if(saveBtn.style.visibility === "visible"){ reformation(0) }
    console.log("check")

    let trigger = eve.target.id
    let note = document.createElement("p")
    note.classList="text-box"
    
    for(let i of noteStorage){
        console.log(i[1])
        //console.log(String(eve.target.id))
        if(String(trigger) === i[1]){
             
            note.appendChild(document.createTextNode(i[0]))
        }
    }

    writingArea.appendChild(note)

    noteBtn.addEventListener("click", returnTextArea)
}
function returnTextArea(){
    noteBtn.removeEventListener("click", returnTextArea)
    writingArea.removeChild(document.querySelector(".text-box"))
    writingArea.appendChild(textBox)
}