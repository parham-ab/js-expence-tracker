// const balanceDisplay = document.querySelector(".balance-display");
// const incomeDisplay = document.querySelector(".income-display");
// const expenseDisplay = document.querySelector(".expense-display");
// const tableSection = document.querySelector("#table-container");
// const addButton = document.getElementById("addButton");
// const itemList = document.querySelector("tbody");
// let balance = 0;
// let income = 0;
// let expenses = 0;
// let itemNo = 0;
// // hide table if there is no row
// const toggleTableDisplay = () =>
//   (tableSection.style.display = itemNo === 0 ? "none" : "flex");
// // Function to update balance, income, and expenses display
// function updateDisplay() {
//   balanceDisplay.textContent = "$ " + balance.toFixed(2);
//   incomeDisplay.textContent = "$ " + income.toFixed(2);
//   expenseDisplay.textContent = "$ " + expenses.toFixed(2);
//   toggleTableDisplay();
// }
// // Function to update table
// function createRow(type, name, amount, category, date) {
//   const newRow = document.createElement("tr");
//   newRow.classList.add(type === "expense" ? "bg-[#331414]" : "bg-[#0d2d0b]");
//   newRow.innerHTML = `
//       <td class="whitespace-nowrap text-center item-no">${++itemNo}</td>
//       <td class="whitespace-nowrap text-center">${name}</td>
//       <td class="whitespace-nowrap text-center">${amount}</td>
//       <td class="text-center">${category}</td>
//       <td class="text-center">${date}</td>
//       <td class="whitespace-nowrap text-center">
//       <button class="material-symbols-outlined text-red-600 hover:text-red-900 delete-btn">delete</button>
//       </td>
//   `;
//   itemList.appendChild(newRow);
//   if (type === "income") {
//     income += parseFloat(amount);
//   } else {
//     expenses += parseFloat(amount);
//   }
//   balance = income - expenses;
//   updateDisplay();
// }
// // Adding new items
// addButton.addEventListener("click", function () {
//   const type = document.querySelector("select[name='type']").value;
//   const name = document.querySelector("input[name='name']").value;
//   const amount = parseFloat(
//     document.querySelector("input[name='amount']").value
//   );
//   const category = document.querySelector("select[name='category']").value;
//   const date = document.querySelector("input[type='date']").value;
//   if (name && !isNaN(amount)) {
//     createRow(type, name, amount, date, category);
//     document.querySelector("input[name='name']").value = "";
//     document.querySelector("input[name='amount']").value = "";
//   } else {
//     alert("Please enter valid name and amount!");
//   }
// });
// // Deleting items
// itemList.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete-btn")) {
//     const row = event.target.closest("tr");
//     const type = row.dataset.type; // Retrieve transaction type from data attribute
//     const amount = parseFloat(row.children[2].textContent);
//     if (type === "income") {
//       income -= amount;
//     } else {
//       expenses -= amount;
//     }
//     balance = income - expenses;
//     row.remove();
//     // Update itemNo based on the number of remaining rows
//     const rows = itemList.querySelectorAll("tr");
//     itemNo = rows.length;
//     rows.forEach((row, index) => {
//       row.querySelector(".item-no").textContent = index + 1;
//     });
//     updateDisplay();
//   }
// });
// toggleTableDisplay();
