const state = {
  transaction: [],
};

export const addTransaction = function (transaction) {
  const [amount, type, description] = [...transaction];
  const newTransaction = {
    id: Date.now(),
    amount,
    type,
    description,
    status: "Success",
  };

  state.transaction.push(newTransaction);

  return newTransaction;
};

export const totalTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "income" ? ac + +el.amount : ac - +el.amount),
    0
  );
};

export const incomeTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "income" ? ac + +el.amount : ac),
    0
  );
};

export const expenseTransaction = function () {
  return state.transaction.reduce(
    (ac, el) => (el.type === "expense" ? ac + +el.amount : ac),
    0
  );
};
