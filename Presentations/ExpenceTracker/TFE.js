let expenses = [];

// DOM Elements
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpenses");

// Render expenses
const renderExpenses = (filterFn = null) => {
    const filteredExpenses = filterFn ? expenses.filter(filterFn) : expenses;

    // Populate list
    expenseList.innerHTML = "";
    filteredExpenses.forEach(expense => {
        const li = document.createElement("li");
        li.textContent = `${expense.name} - $${expense.amount} (${expense.category})`;
        expenseList.appendChild(li);
    });

    // Calculate total
    const total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpenses.textContent = `Total Expenses: $${total}`;
};

// Add expense
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    expenses.push({ name, amount, category });
    expenseName.value = "";
    expenseAmount.value = "";
    renderExpenses();
});

// Filter buttons
document.getElementById("filterAll").addEventListener("click", () => renderExpenses());
document.getElementById("filterFood").addEventListener("click", () => renderExpenses(expense => expense.category === "Food"));
document.getElementById("filterTransport").addEventListener("click", () => renderExpenses(expense => expense.category === "Transport"));
document.getElementById("filterEntertainment").addEventListener("click", () => renderExpenses(expense => expense.category === "Entertainment"));

// Initial render
renderExpenses();