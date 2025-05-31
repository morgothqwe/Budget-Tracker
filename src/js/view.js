class View {
  _payBtn = document.querySelector(".bt-main--proceed");
  _payAmount = document.querySelector(".bt-main--amount");
  _payType = document.querySelector(".bt-main--status");
  _payDescription = document.querySelector(".bt-main--description");

  addHandlerAddTransaction(handler) {
    this._payBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const transactionAmount = this._payAmount.value;
      if (!transactionAmount) return;

      const transactionType = this._payType.value;
      if (!transactionType) return;

      const description = this._payDescription.value;
      if (!description) return;

      const transaction = [transactionAmount, transactionType, description];
      handler(transaction);

      this._payAmount.value = "";
      this._payType.value = "income";
      this._payDescription.value = "";
    });
  }

  renderAddTransaction(transaction) {
    const markup = `
      <div class="bt-main--transaction" data-id="${transaction.id}">
        <span>$${transaction.amount}</span>
        <span>${transaction.type}</span>
        <span>${transaction.description}</span>
        <span></span>
        <span class="${
          transaction.status === "Success"
            ? "transaction-success"
            : "transaction-denied"
        }">${transaction.status}</span>
      </div>
    `;

    document
      .querySelector(".bt-add--transaction")
      .insertAdjacentHTML("afterbegin", markup);
  }

  renderBalance(total, income, expense) {
    if (total)
      document.querySelector(
        ".balance-total--amount"
      ).textContent = `$${total.toFixed(2)}`;
    if (expense)
      document.querySelector(
        ".balance-expense--amount"
      ).textContent = `$${expense.toFixed(2)}`;
    if (income)
      document.querySelector(
        ".balance-income--amount"
      ).textContent = `$${income.toFixed(2)}`;
  }
}

export default new View();
