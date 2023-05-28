// chrome://extensions/ 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

function addLeads() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
}
inputBtn.addEventListener("click", function() {
    addLeads()
})
inputEl.addEventListener("keypress", function() {
    if (event.code === 'Enter') {
        event.preventDefault()
        addLeads()
    }
})
function renderLeads() {
    let list = ""
    for (let i=0; i<myLeads.length; i++) {
        list += `<li>
                    <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a> 
                </li>`
    }
    console.log(list)
    ulEl.innerHTML = list
}
