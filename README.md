# SpendWise

## Project Description

SpendWise is a budget tracking dashboard designed to help users understand their monthly budget, expenses, and remaining balance.

The project started as a visual dashboard and has now been enhanced with JavaScript. JavaScript allows SpendWise to store financial data, collect user input, perform calculations, and display results.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

- Variables
- Constants
- Data types
- Arrays
- Objects
- User input
- Number conversion
- Conditional statements
- Loops
- Functions
- Calculations
- Console output
- DOM manipulation

## Variables

The project uses `const` and `let` to store information.

For example:

```javascript
const currency = "KSh";
let monthlyBudget = 80000;
````

The `currency` value does not need to change, so it is stored using `const`.

The monthly budget can change when the user provides a new value, so it is stored using `let`.

## Expense Data

Expenses are stored in an array of objects.

Each expense contains a name and an amount.

Example:

```javascript
let expenses = [
    {
        name: "Food",
        amount: 12400
    }
];
```

This makes it possible to store and process multiple expenses.

## User Input

The application uses the JavaScript `prompt()` function to collect the user's monthly budget.

Example:

```javascript
let userBudget = prompt(
    "Enter your monthly budget in KSh:"
);
```

The value collected from the prompt is converted into a number using:

```javascript
Number(userBudget);
```

## Calculations

SpendWise calculates the total expenses and remaining balance.

The remaining balance is calculated using:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

For example:

```javascript
calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);
```

## Functions

Functions are used to organize and reuse the application's logic.

The project includes:

### calculateTotalExpenses()

This function adds all the expense amounts together.

### calculateRemainingBalance()

This function subtracts total expenses from the budget.

Using functions keeps the code organized and makes calculations reusable.

## Console Output

The application displays clearly labeled results in the browser console.

Examples include:

* Monthly Budget
* Total Expenses
* Remaining Balance
* Number of Expenses
* Updated Budget
* Updated Remaining Balance

## DOM Manipulation

JavaScript is also used to update the dashboard values displayed on the webpage.

The following elements are selected using their IDs:

```javascript
document.getElementById("budget-display");
document.getElementById("expense-display");
document.getElementById("balance-display");
```

The calculated values are then displayed on the dashboard.

## Project Files

### index.html

Contains the structure and static content of the SpendWise dashboard.

### style.css

Contains the visual design, colors, typography, CSS Grid, Flexbox, responsive layout, and card styling.

### script.js

Contains the JavaScript variables, expense data, user input, calculations, functions, console output, and dashboard updates.

### README.md

Explains the project and the JavaScript concepts used.

## How to Run the Project

1. Open the project folder.
2. Open `index.html` in a web browser.
3. Enter your monthly budget when the prompt appears.
4. Open the browser Developer Tools.
5. Select the **Console** tab.
6. View the labeled SpendWise budget calculations.

## Conclusion

SpendWise now has a JavaScript foundation that can process budgeting information and perform financial calculations. The project can be expanded in future weeks with additional interactive features.


