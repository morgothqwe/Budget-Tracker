class View {
  _payBtn = document.querySelector(".transaction-submit");
  _payAmount = document.querySelector(".transaction-amount");
  _payType = document.querySelector(".transaction-type");
  _payDescription = document.querySelector(".transaction-description");

  _successTransaction = document.querySelector(".summary-success-filter");
  _deniedTransaction = document.querySelector(".summary-denied-filter");

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

  addHandlerSummary(handler) {
    [this._successTransaction, this._deniedTransaction].forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target === this._successTransaction) {
          document
            .querySelectorAll(".summary-row")
            .forEach((el) => el.remove());
          this._deniedTransaction.classList.remove("summary-filter-selected");
          this._successTransaction.classList.add("summary-filter-selected");

          const status = "Success";
          handler(status);
          this._successTransaction.dataset.clicked = "true";
          this._deniedTransaction.dataset.clicked = "false";
        } else if (e.target === this._deniedTransaction) {
          document
            .querySelectorAll(".summary-row")
            .forEach((el) => el.remove());
          this._successTransaction.classList.remove("summary-filter-selected");
          this._deniedTransaction.classList.add("summary-filter-selected");

          const status = "Denied";
          handler(status);
          this._deniedTransaction.dataset.clicked = "true";
          this._successTransaction.dataset.clicked = "false";
        }
      })
    );
  }

  renderAddTransaction(transaction) {
    if (!transaction) return;
    const markup = `
      <div class="transaction-row" data-id="${transaction.id}">
        <span>$${transaction.amount.toFixed(2)}</span>
        <span>${transaction.type}</span>
        <span>${transaction.description}</span>
        <span></span>
        <span class="${
          transaction.status === "Success" ? "status-success" : "status-denied"
        }">${transaction.status}</span>
      </div>
    `;

    document
      .querySelector(".transaction-container")
      .insertAdjacentHTML("afterbegin", markup);
  }

  renderBalance(total, income, expense) {
    document.querySelector(
      ".balance-total span:last-child"
    ).textContent = `$${total.toFixed(2)}`;
    document.querySelector(
      ".balance-income span:last-child"
    ).textContent = `$${income.toFixed(2)}`;
    document.querySelector(
      ".balance-expense span:last-child"
    ).textContent = `$${expense.toFixed(2)}`;
  }

  renderSummary(transaction) {
    const markup = `
      <div class="summary-row" data-id="${transaction.id}">
        <span class="summary-row-amount">${transaction.amount}</span>
        <span class="summary-row-type">${transaction.type}</span>
        <span class="summary-row-status">${transaction.status}</span>
      </div>
    `;

    document.querySelector(".summary").insertAdjacentHTML("beforeend", markup);
  }
}

export default new View();
