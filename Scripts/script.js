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
    document.querySelector("aside").style.backgroundColor="#403737"
    writingArea.style.backgroundColor="#374040"
    document.querySelector("aside").style.color="#afb2b2"
    saveBtn.style.backgroundColor="darkgrey"
    noteBtn.style.backgroundColor="darkgrey" 
    cancelBtn.style.backgroundColor="darkgrey"
    textBox.style.backgroundColor="darkslategrey"
    textBox.style.color="white"
    if (document.querySelector("p.text-box")!==null){
        document.querySelector(".text-box").style.backgroundColor="darkslategrey"
        document.querySelector(".text-box").style.color="white"
    }

    themeBtn.removeEventListener("click",darkTheme)
    themeBtn.addEventListener("click",lightTheme)
    themeBtn.style.backgroundColor="#ebebeb"
    themeBtn.innerHTML= "Light Mode"
    themeBtn.style.color="black"
}
function lightTheme(){
    let backdrop = document.querySelector("body")
    backdrop.style.backgroundColor="#ebede4"
    document.querySelector("aside").style.backgroundColor="blueviolet"
    writingArea.style.backgroundColor="cornflowerblue"
    document.querySelector("aside").style.color="black"
    saveBtn.style.backgroundColor="green"
    noteBtn.style.backgroundColor="azure" 
    cancelBtn.style.backgroundColor="lightcoral"
    textBox.style.backgroundColor="white"
    textBox.style.color="black"
    if (document.querySelector("p.text-box")!==null){
        document.querySelector(".text-box").style.backgroundColor="white"
        document.querySelector(".text-box").style.color="black"
    }
    
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
        writingArea.removeChild(document.querySelector(".text-box"))
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
}
function cancelNote(){ 
    reformation(0)
    textBox.value=""
}
function runThatBack(eve){
    
    if(saveBtn.style.visibility === "visible" 
        || document.querySelector(".text-box")!==null)
    { reformation(0) }
    let trigger = eve.target.id
    let note = document.createElement("p")
    
    note.classList = "text-box"
    
    for(let i of noteStorage){
        if(String(trigger) === i[1]){
            note.appendChild(document.createTextNode(i[0]))
        }
    }
    note.style = textBox.style
    
    block = writingArea.appendChild(note)
    block.style.color=textBox.style.color
    block.style.backgroundColor=textBox.style.backgroundColor

    noteBtn.addEventListener("click", returnTextArea)
    
}
function returnTextArea(){
    
    writingArea.removeChild(document.querySelector(".text-box"))
    noteBtn.removeEventListener("click", returnTextArea)
}