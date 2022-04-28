const container = document.querySelector('.container');
const balance = document.getElementById('balance');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus');
const list = document.getElementById('list');
const inputText = document.getElementById('text');
const inputAmount = document.getElementById('amount');
const btn = document.querySelector('.btn');


let transaction
let yourBalance = 0;
let incomes = 0;
let expenses = 0;
let clicked = 0;

// When button is clicked do these things 
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if(inputAmount.value === '' && inputText.value === '') return;

    transaction = inputAmount.value.slice(0, 1);

    newTransaction();
    updateDisplay();
    clicked++;
    container.addEventListener('click', deleteTransaction)
    inputAmount.value = inputText.value = '';
    
})

const newTransaction = function () {
    // Get transaction text from input  
    // Get transaction amount from input 
    // Update History of transactions 
    list.innerHTML += `<li data-set="${clicked}" class="${transaction === '-' ? 'minus' : 'plus'}">
         ${inputText.value} <span>${transaction === '-' ? '-' : ''}$${transaction === '-' ? inputAmount.value.slice(1) : inputAmount.value}</span><button class="delete-btn">x</button>
       </li>`


}

const updateDisplay = function () {
    // Check is it income or expense and based on it update...
    if(transaction === '-') {
        expenses -= inputAmount.value;
        expense.textContent = '-' + '$' + expenses.toLocaleString('en');
    } else {
        incomes += +inputAmount.value;
        income.textContent = '+' + '$' + incomes.toLocaleString('en');
    }
    // Update Balance
    yourBalance = incomes - expenses;
    balance.textContent = '$' + yourBalance.toFixed(2)
}

// Remove clicked transaction
const deleteTransaction = function (e) {
    if(!e.target.classList.contains('delete-btn')) return;
    
    const btn = e.target;
    btn.closest('li').remove();
    
    };
   
// Storing inforrmations into Local storage;






