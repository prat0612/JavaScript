let countEl = document.getElementById("count")
let prevEntries = document.getElementById("prev")
let totalEntries = document.getElementById("total")
let count = 0       // store count till save
let total = 0       // store total count, count added on save

//used to increment count 
function increment() {
    count++
    countEl.innerText = count
    totalEntries.innerText = " "    // temp disable total, appears on save
}


function save() {
    total += count
    // update previous and total entries
    prevEntries.innerText += " - " + count   
    totalEntries.innerText = "Total entries = " + total 
    // reset count and count(html) on save
    count = 0
    countEl.innerText = 0
}