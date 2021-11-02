let items = document.querySelectorAll('table .td-amount .v-bottom')
let total = 0
for (let item of items) {
    let val = item.innerText.replace(/[^\d.-]/g, '')
    total += Number(val)
}
console.log(total)
