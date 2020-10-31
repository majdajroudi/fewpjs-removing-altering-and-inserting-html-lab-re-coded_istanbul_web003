// Write your code here!
const mainElement = document.querySelector("#main")
console.log(mainElement)
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.removeChild(mainElement)
console.log(document.body)
document.addEventListener("load", function(){
    document.body.removeChild(mainElement)
    
    document.body.appendChild(newHeader)
})