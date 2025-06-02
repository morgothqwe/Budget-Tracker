import * as model from "./model";
import view from "./view";

const controlAddTransaction = function (transaction) {
  const newTransaction = model.addTransaction(transaction);

  if (!newTransaction) {
    alert("Invalid transaction amount. Please enter a valid number.");
    return;
  }
  view.renderAddTransaction(newTransaction);
  const total = model.totalTransaction();
  const income = model.incomeTransaction();
  const expense = model.expenseTransaction();
  view.renderBalance(total, income, expense);
  model.setLocalStorage();
};

const controlSummary = function (status) {
  const summary = model.summaryTransaction(status);
  if (Array.isArray(summary)) {
    summary.forEach((el) => view.renderSummary(el));
  }
  // Summary dose not updated with new added transaction if one of activity tabs have selected. I should click on it again to show the new added transaction. NEED TO BE FIXED
};

const init = function () {
  // model.clearLocalStorage(); // Uncomment for testing reset
  model.loadLocalStorage();
  const transactions = model.getTransaction();
  if (Array.isArray(transactions) && transactions.length > 0) {
    transactions.forEach((el) => view.renderAddTransaction(el));
    const total = model.totalTransaction();
    const income = model.incomeTransaction();
    const expense = model.expenseTransaction();
    view.renderBalance(total, income, expense);
  }
  view.addHandlerAddTransaction(controlAddTransaction);
  view.addHandlerSummary(controlSummary);
};

init();
