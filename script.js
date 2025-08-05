function addIncome() {
    const div = document.createElement("div");
    div.innerHTML = `
        <label>Income Source:
          <input type="text" placeholder="e.g., Etsy" class="income-name">
          <input type="number" placeholder="Amount" class="income-amount">
        </label>`;
    document.getElementById("income-list").appendChild(div);
}

function addExpense() {
    const div = document.createElement("div");
    div.innerHTML = `
        <label>Expense Name:
          <input type="text" placeholder="e.g., Phone Bill" class="expense-name">
          <input type="number" placeholder="Amount" class="expense-amount">
        </label>`;
    document.getElementById("expense-list").appendChild(div);
}

function calculateBudget() {
    let totalIncome = 0;
    let totalExpenses = 0;

    document.querySelectorAll(".income-amount").forEach(input => {
        totalIncome += parseFloat(input.value) || 0;
    });

    document.querySelectorAll(".expense-amount").forEach(input => {
        totalExpenses += parseFloat(input.value) || 0;
    });

    const taxes = totalIncome * 0.25;
    const spendable = totalIncome - totalExpenses - taxes;

    document.getElementById("total-income").textContent = totalIncome.toFixed(2);
    document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);
    document.getElementById("taxes").textContent = taxes.toFixed(2);
    document.getElementById("spendable").textContent = spendable.toFixed(2);
    document.getElementById("results").style.display = "block";
}