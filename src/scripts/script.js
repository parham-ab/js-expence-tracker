const balanceDisplay = document.querySelector(".balance-display");
const incomeDisplay = document.querySelector(".income-display");
const expenseDisplay = document.querySelector(".expense-display");
const tableSection = document.querySelector("#table-container");
const addButton = document.getElementById("addButton");
const itemList = document.querySelector("tbody");
let balance = 0;
let income = 0;
let expenses = 0;
let itemNo = 0;
const toggleTableDisplay = () =>
  (tableSection.style.display = itemNo === 0 ? "none" : "flex");
function updateDisplay(type, amount) {
  if (type === "income") {
    income += parseFloat(amount);
  } else {
    expenses += parseFloat(amount);
  }
  balance = income - expenses;
  balanceDisplay.textContent = "$ " + balance.toFixed(2);
  incomeDisplay.textContent = "$ " + income.toFixed(2);
  expenseDisplay.textContent = "$ " + expenses.toFixed(2);
  toggleTableDisplay();
}
toggleTableDisplay();
// Add row
const addRow = () => {
  const type = document.querySelector("select[name='type']").value;
  const name = document.querySelector("input[name='name']").value;
  const amount = parseFloat(
    document.querySelector("input[name='amount']").value
  );
  const category = document.querySelector("select[name='category']").value;
  const date = document.querySelector("input[type='date']").value;
  const newRow = document.createElement("tr");
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
  updateDisplay(type, amount);
  // empty fields
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='amount']").value = "";
  document.querySelector("input[type='date']").value = "";
  // delete row
  const deleteButton = newRow.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    // Get the amount and type of the item being deleted
    const amountCell = newRow.querySelector("td:nth-child(3)");
    const type = amountCell.parentElement.classList.contains("bg-[#331414]")
      ? "expense"
      : "income";
    const amount = parseFloat(amountCell.textContent);
    if (type === "income") {
      income -= amount;
    } else {
      expenses -= amount;
    }
    balance = income - expenses;
    balanceDisplay.textContent = "$ " + balance.toFixed(2);
    incomeDisplay.textContent = "$ " + income.toFixed(2);
    expenseDisplay.textContent = "$ " + expenses.toFixed(2);
    newRow.remove();
    const rows = itemList.querySelectorAll("tr");
    itemNo = rows.length;
    rows.forEach((row, index) => {
      row.querySelector(".item-no").textContent = index + 1;
    });
    toggleTableDisplay();
  });
};

addButton.addEventListener("click", addRow);
