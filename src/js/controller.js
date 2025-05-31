import * as model from "./model";
import view from "./view";

const controlAddTransaction = function (transaction) {
  const newTransaction = model.addTransaction(transaction);
  view.renderAddTransaction(newTransaction);
  const total = model.totalTransaction();
  const income = model.incomeTransaction();
  const expense = model.expenseTransaction();
  view.renderBalance(total, income, expense);
};

const init = function () {
  view.addHandlerAddTransaction(controlAddTransaction);
};

init();
