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
  console.log(state.transaction);
  return newTransaction;
};
