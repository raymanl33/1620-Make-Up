let budget = document.querySelector('#CreateBudget') 
let array = []
console.log(array)

function defineBudgetArea() {

    html = `
    <div id="budgetarea"> 
    <h2>My Budget: ${budget.value}</h2>
    <p>current remaining budget: ${budget.value}</p> 
    `
    return html
}

function defineExpenseArea() {
    let item = document.querySelector('#ExpItem')
    let amount = document.querySelector('#ExpAmount')
    html = `
    <div class="AddExpense">
        <ul>
            <li>${item.value} ${amount.value}</li>
        </ul>
    </div>`

    return html
}

function addExpense() {
    let form = document.querySelector('#budgetarea')
    form.insertAdjacentHTML('beforeend', defineExpenseArea())
    calculateExpense()
}


function addEventlistner() {
    let form = document.querySelector('.form')
    form.addEventListener('click', (e) => {
        console.log(e.target.innerText)
    })
}

function storebudget() {
    let form = document.querySelector('.form')
    addEventlistner()
    form.insertAdjacentHTML('afterend', defineBudgetArea())
    array[0] = budget.value

}



function calculateExpense() {

    let amount = document.querySelector('#ExpAmount')
    const updateBudget = document.querySelector('p')
    let total = array[0] - (amount.value)
    array[0] = total
  
    updateBudget.innerText =  'current remaing budget: ' + total;
}

