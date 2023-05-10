
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    update()
}

function update() {
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    update()
}