
function defineBudgetArea() {
    let budget = document.querySelector('#CreateBudget')

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
 

}

function calculateExpense() {
    let amount = document.querySelector('#ExpAmount')
    let budget = document.querySelector('#CreateBudget')
    const updateBudget = document.querySelector('p')
    let total = budget.value - (amount.value)
    console.log(total)
  
    updateBudget.innerText =  'current remaing budget:' + total;
}
