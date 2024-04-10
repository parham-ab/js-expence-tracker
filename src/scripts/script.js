const balanceDisplay = document.querySelector(".balance-display");
const incomeDisplay = document.querySelector(".income-display");
const expenseDisplay = document.querySelector(".expense-display");
const tableSection = document.querySelector("#table-container");
const addButton = document.getElementById("addButton");
const itemList = document.querySelector("tbody");
const percentage_container = document.querySelector(".percentage");
let balance = 0;
let income = 0;
let expenses = 0;
let itemNo = 0;
const categoryExpenses = {}; // Object to store expenses for each category

const toggleTableDisplay = () =>
  (tableSection.style.display = itemNo === 0 ? "none" : "flex");
function updateDisplay(type, amount, category) {
  if (type === "income") {
    income += parseFloat(amount);
  } else {
    expenses += parseFloat(amount);
    if (categoryExpenses[category]) {
      categoryExpenses[category] += parseFloat(amount);
    } else {
      categoryExpenses[category] = parseFloat(amount);
    }
  }
  balance = income - expenses;
  balanceDisplay.textContent = `$ ${balance.toFixed(2)}`;
  incomeDisplay.textContent = `$ ${income.toFixed(2)}`;
  expenseDisplay.textContent = `$ ${expenses.toFixed(2)}`;
  toggleTableDisplay();
}
toggleTableDisplay();
// Function to calculate category percentages
function calculateCategoryPercentages() {
  const totalExpense = Object.values(categoryExpenses).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const percentages = {};
  for (const category in categoryExpenses) {
    const percentage = (categoryExpenses[category] / totalExpense) * 100;
    if (percentage > 0) {
      percentages[category] = percentage.toFixed(2) + "%";
    }
  }
  // Clear previous content of percentage_container
  percentage_container.innerHTML = "";
  // Create and append p tags for each category percentage
  for (const category in percentages) {
    const pTag = document.createElement("p");
    pTag.textContent = `${category}: ${percentages[category]}`;
    percentage_container.appendChild(pTag);
  }
  return percentages;
}
// Add row
const addRow = () => {
  const nameInput = document.querySelector("input[name='name']");
  const amountInput = document.querySelector("input[name='amount']");
  const dateInput = document.querySelector("input[type='date']");
  const type = document.querySelector("select[name='type']").value;
  const category = document.querySelector("select[name='category']").value;
  const newRow = document.createElement("tr");
  // Validate inputs
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;
  if (name === "") {
    alert("Please enter a name.");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  if (date === "") {
    alert("Please select a date.");
    return;
  }
  newRow.classList.add(type === "expense" ? "bg-[#331414]" : "bg-[#0d2d0b]");
  newRow.innerHTML = `
      <td class="whitespace-nowrap text-center item-no">${++itemNo}</td>
      <td class="whitespace-nowrap text-center max-w-52 text-wrap">${name}</td>
      <td class="whitespace-nowrap text-center">${amount}</td>
      <td class="text-center">${date}</td>
      <td class="text-center">${category}</td>
      <td class="whitespace-nowrap text-center">
      <button class="material-symbols-outlined text-red-600 hover:text-red-900 delete-btn">delete</button>
      </td>
  `;
  itemList.appendChild(newRow);
  updateDisplay(type, amount, category);
  // empty fields
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='amount']").value = "";
  document.querySelector("input[type='date']").value = "";
  // delete row
  const deleteButton = newRow.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    // Get the amount, type, and category of the item being deleted
    const amountCell = newRow.querySelector("td:nth-child(3)");
    const type = amountCell.parentElement.classList.contains("bg-[#331414]")
      ? "expense"
      : "income";
    const amount = parseFloat(amountCell.textContent);
    const category = newRow.querySelector("td:nth-child(5)").textContent;
    if (type === "income") {
      income -= amount;
    } else {
      expenses -= amount;
      categoryExpenses[category] -= amount;
    }
    balance = income - expenses;
    balanceDisplay.textContent = `$ ${balance.toFixed(2)}`;
    incomeDisplay.textContent = `$ ${income.toFixed(2)}`;
    expenseDisplay.textContent = `$ ${expenses.toFixed(2)}`;
    newRow.remove();
    const rows = itemList.querySelectorAll("tr");
    itemNo = rows.length;
    rows.forEach((row, index) => {
      row.querySelector(".item-no").textContent = index + 1;
    });
    toggleTableDisplay();
    calculateCategoryPercentages();
  });
  calculateCategoryPercentages();
};
addButton.addEventListener("click", addRow);
