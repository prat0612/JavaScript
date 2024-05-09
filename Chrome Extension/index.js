// chrome://extensions/ 
let myList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const localList = JSON.parse(localStorage.getItem("List"))
const tabBtn = document.getElementById("tab-btn")

// fetch and display list if localStorage has inputs
if (localList) {
    myList = localList 
    displayList()
}

// event listeners
inputBtn.addEventListener("click", addList)
inputEl.addEventListener("keypress", function(event){
    if (event.code === "Enter")
        addList()
})
tabBtn.addEventListener("click", addTab)
deleteBtn.addEventListener("click", deleteList)

// functions
function addList() {
    myList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("List", JSON.stringify(myList))
    displayList()  
}

function addTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myList.push(tabs[0].url)
        localStorage.setItem("List", JSON.stringify(myList))
        displayList()
    })
}

function deleteList() {
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
