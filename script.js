const displayTip = document.querySelector('#display_tip')
const display_tip_per = document.querySelector('#display_tip_per')
const display_new_total = document.querySelector('#display_new_total')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')

billInput.value = 100

function calculateTip () {
    
    const billValue = parseInt(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tipAmount = billValue * tipValue / 100
    const newTotal = billValue + tipAmount
    const tipAmountPer = tipAmount / peopleValue

    displayTip.innerHTML = tipAmount.toFixed(2)
    display_tip_per.innerHTML = tipAmountPer.toFixed(2)
    display_new_total.innerHTML = newTotal.toFixed(2)
    console.log(newTotal)
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
