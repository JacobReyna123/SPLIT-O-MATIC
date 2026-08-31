const personForm = document.getElementById('personForm')
const personInput = document.getElementById('personInput')
const peopleList = document.getElementById('peopleList')

const expenseForm = document.getElementById('expenseForm')
const descinput = document.getElementById('descInput')
const amountInput = document.getElementById('amountInput')
const paidBySelect = document.getElementById('paidBySelect')
const expensesList = document.getElementById('expensesList')

const totalAmount = document.getElementById('totalSpent')
const splitAmount = document.getElementById('splitAmount')
const summaryList = document.getElementById('summaryList')

const people = []
const expenses = []

const renderSummary = () => {
    summaryList.innerHTML = ''

    if (people.length === 0) {
        totalAmount.textContent = '0.00'
        splitAmount.textContent = '0.00'
        return
    }

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const share = total / people.length

    totalAmount.textContent = `$${total.toFixed(2)}`
    splitAmount.textContent = `$${share.toFixed(2)}`

    people.forEach(person => {
        const paid = expenses.filter(exp => exp.paidBy === person).reduce((sum, expense) => sum + expense.amount, 0)
        const balance = paid - share

        const li = document.createElement('li')
        li.textContent =
            balance >= 0
            ? `${person} gets $${balance.toFixed(2)}`
            : `${person} owes $${Math.abs(balance).toFixed(2)}`

        summaryList.appendChild(li)
    })
}

const render = () => {
    peopleList.innerHTML = ''
    paidBySelect.innerHTML = ''

    people.forEach(person => {
        const li = document.createElement('li')
        li.textContent = person
        peopleList.appendChild(li)

        const option = document.createElement('option')
        option.value = person
        option.textContent = person
        paidBySelect.appendChild(option)
    })

    expensesList.innerHTML = ''
    expenses.forEach(expense => {
        const li = document.createElement('li')
        li.textContent = `${expense.desc} - $${expense.amount.toFixed(2)} paid by ${expense.paidBy}`
        expensesList.appendChild(li)
    })

    renderSummary()
}

personForm.addEventListener('submit', event => {
    event.preventDefault()

    const name = personInput.value.trim()
    if (!name) return

    people.push(name)
    personInput.value = ''

    render()
})

expenseForm.addEventListener('submit', event => {
    event.preventDefault()

    const desc = descinput.value.trim()
    const amount = parseFloat(amountInput.value)
    const paidBy = paidBySelect.value

    if (!desc || !amount || !paidBy) return

    expenses.push({ desc, amount, paidBy })

    descinput.value = ''
    amountInput.value = ''

    render()
})

render()
