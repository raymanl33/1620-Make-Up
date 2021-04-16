


function storebudget() {
    const budget = document.querySelector('#CreateBudget')
    let currentbudget = budget.value
    console.log(currentbudget)
    return currentbudget
}

function calculation() {
    console.log(storebudget())
}
