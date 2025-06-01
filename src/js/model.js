import { TRANSACTIONS_KEY } from "./config";

const state = {
  transaction: [],
};

export const addTransaction = function (transaction) {
  const [amount, type, description] = [...transaction];
  const parsedAmount = +amount;
  if (isNaN(parsedAmount)) return null;
  const newTransaction = {
    id: Date.now(),
    amount: parsedAmount, // Store as number
    type,
    description,
    status: "Success",
  };

  state.transaction.push(newTransaction);
  return newTransaction;
};

export const totalTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "income" ? ac + el.amount : ac - el.amount),
    0
  );
};

export const incomeTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "income" ? ac + el.amount : ac),
    0
  );
};

export const expenseTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "expense" ? ac + el.amount : ac),
    0
  );
};

export const getTransaction = function () {
  return state.transaction;
};

export const setLocalStorage = function () {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(state.transaction));
};

export const loadLocalStorage = function () {
  const storedTransaction = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY));
  if (Array.isArray(storedTransaction)) {
    state.transaction = storedTransaction
      .map((tr) => ({
        ...tr,
        amount: +tr.amount, // Convert string to number
      }))
      .filter((tr) => {
        return (
          typeof tr.id === "number" &&
          typeof tr.amount === "number" &&
          !isNaN(tr.amount) &&
          ["income", "expense"].includes(tr.type) &&
          typeof tr.description === "string" &&
          ["Success", "Denied"].includes(tr.status)
        );
      });
  }
};

export const clearLocalStorage = function () {
  localStorage.removeItem(TRANSACTIONS_KEY);
  state.transaction = [];
};
