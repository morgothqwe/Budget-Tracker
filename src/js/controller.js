import * as model from "./model";
import view from "./view";

const controlAddTransaction = function (transaction) {
  const newTransaction = model.addTransaction(transaction);
  view.renderAddTransaction(newTransaction);
};

const init = function () {
  view.addHandlerAddTransaction(controlAddTransaction);
};

init();
