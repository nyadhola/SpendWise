javascript
// ============================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ============================================

// 1. Store application data using variables

const currency = "KSh";

let monthlyBudget = 80000;

let expenses = [
    {
        name: "Food",
        amount: 12400
    },
    {
        name: "Transport",
        amount: 6800
    },
    {
        name: "Rent",
        amount: 15000
    },
    {
        name: "Entertainment",
        amount: 3500
    },
    {
        name: "Savings",
        amount: 7500
    },
    {
        name: "Utilities",
        amount: 4300
    }
];


// 2. Function to calculate total expenses

function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense.amount;
    }

    return total;
}


// 3. Function to calculate remaining balance

function calculateRemainingBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}


// 4. Calculate current expenses

let totalExpenses = calculateTotalExpenses(expenses);


// 5. Calculate remaining balance

let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// 6. Display results in the browser console

console.log("========== SPENDWISE BUDGET REPORT ==========");

console.log("Monthly Budget:", currency, monthlyBudget);

console.log("Total Expenses:", currency, totalExpenses);

console.log("Remaining Balance:", currency, remainingBalance);

console.log("Number of Expenses:", expenses.length);

console.log("==============================================");


// 7. Collect user input using prompts

let userBudget = prompt(
    "Enter your monthly budget in KSh:"
);


// Check whether the user entered a valid budget

if (userBudget !== null && userBudget.trim() !== "") {

    userBudget = Number(userBudget);

    if (!isNaN(userBudget) && userBudget >= 0) {

        monthlyBudget = userBudget;

        console.log("Updated Monthly Budget:", currency, monthlyBudget);

        // Recalculate remaining balance

        remainingBalance = calculateRemainingBalance(
            monthlyBudget,
            totalExpenses
        );

        console.log(
            "Updated Remaining Balance:",
            currency,
            remainingBalance
        );

    } else {

        console.log("Invalid budget entered.");

    }

} else {

    console.log("No new budget was entered.");

}


// 8. Display updated results

console.log("========== UPDATED SPENDWISE REPORT ==========");

console.log("Budget:", currency, monthlyBudget);

console.log("Expenses:", currency, totalExpenses);

console.log("Balance:", currency, remainingBalance);

console.log("==============================================");


// 9. Update the dashboard

const budgetDisplay = document.getElementById("budget-display");
const expenseDisplay = document.getElementById("expense-display");
const balanceDisplay = document.getElementById("balance-display");


// Display formatted amounts

budgetDisplay.textContent =
    currency + " " + monthlyBudget.toLocaleString();

expenseDisplay.textContent =
    currency + " " + totalExpenses.toLocaleString();

balanceDisplay.textContent =
    currency + " " + remainingBalance.toLocaleString();
