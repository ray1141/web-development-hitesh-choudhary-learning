document.addEventListener("DOMContentLoaded", () => {
  //variables
  const expenseForm = document.getElementById("expense-form");
  const expenseTextInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  //   const addExpenseButton = document.querySelector("button");
  const expenseList = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  renderExpenses(expenses);
  calcTotalAmount(expenses);
  //   console.log(expenseList);

  //expenses
  expenseForm.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName !== "BUTTON") return;
    const inputText = expenseTextInput.value.trim();
    const inputAmount = parseFloat(expenseAmountInput.value);
    if (!inputText || inputAmount < 0 || isNaN(inputAmount)) return;
    expenseTextInput.value = "";
    expenseAmountInput.value = "";
    const input = {
      id: Date.now(),
      inputText,
      inputAmount,
    };
    expenses.push(input);
    saveToLocalStorage(expenses);

    //render expenses
    renderExpenses(expenses);

    //calculate total amount
    calcTotalAmount(expenses);
  });

  //deletion logic
  expenseList.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.tagName !== "BUTTON") return;
    const expenseToBeDeleted = expenses.find(
      (exp) =>
        exp.id === Number(e.target.parentElement.getAttribute("data-id")),
    );
    expenses = expenses.filter((exp) => exp.id !== expenseToBeDeleted.id);
    console.log(expenses);
    saveToLocalStorage(expenses);
    renderExpenses(expenses);
    calcTotalAmount(expenses);
  });

  function saveToLocalStorage(exp) {
    localStorage.setItem("expenses", JSON.stringify(exp));
  }

  function renderExpenses(expenses) {
    expenseList.innerHTML = "";
    expenses.forEach((exp) => {
      const liExp = document.createElement("li");
      const spanText = document.createElement("span");
      const spanAmount = document.createElement("span");
      const spanBtn = document.createElement("button");
      spanText.textContent = exp.inputText;
      spanAmount.textContent = exp.inputAmount;
      spanBtn.textContent = "Delete";
      liExp.setAttribute("data-id", exp.id);
      expenseList.appendChild(liExp);
      liExp.appendChild(spanText);
      liExp.appendChild(spanAmount);
      liExp.appendChild(spanBtn);
    });
  }

  function calcTotalAmount(expenses) {
    const total = expenses.reduce((total, exp) => total + exp.inputAmount, 0);
    totalAmount.textContent = total;
  }
});
