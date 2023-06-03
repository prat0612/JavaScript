// chrome://extensions/ 
let myList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const localList = JSON.parse(localStorage.getItem("List"))

// fetch and display list if localStorage has inputs
if (localList) {
    myList = localList 
    displayList()
}
inputBtn.addEventListener("click", addList)
inputEl.addEventListener("keypress", function(event){
    if (event.code === "Enter")
        addList()
})
deleteBtn.addEventListener("click", deleteList)

function addList() {
    myList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("List", JSON.stringify(myList))
    displayList()  
}
function deleteList() {
    alert("Are you sure you want to delete List?")
    localStorage.removeItem("List")
    myList = []
    displayList()
}
function displayList() {
    let listHTML = ""
    for (let i=0; i<myList.length; i++) {
        listHTML += `<li>
                        <a href="${myList[i]}" target="_blank"> ${myList[i]} </a>
                    </li>`
    }
    ulEl.innerHTML = listHTML
}
