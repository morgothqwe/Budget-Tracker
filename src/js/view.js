class View {
  _payBtn = document.querySelector(".bt-main--proceed");
  _payAmount = document.querySelector(".bt-main--amount");
  _payType = document.querySelector(".bt-main--status");
  _payDescription = document.querySelector(".bt-main--description");

  _successTransaction = document.querySelector(".bt-success--title");
  _deniedTransaction = document.querySelector(".bt-denied--title");

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
            .querySelectorAll(".bt-activity")
            .forEach((el) => el.remove());
          this._deniedTransaction.classList.remove("bt-summary--selected");
          this._successTransaction.classList.add("bt-summary--selected");

          const status = "Success";
          handler(status);
          this._successTransaction.dataset.clicked = "true";
          this._deniedTransaction.dataset.clicked = "false";
        } else if (e.target === this._deniedTransaction) {
          document
            .querySelectorAll(".bt-activity")
            .forEach((el) => el.remove());
          this._successTransaction.classList.remove("bt-summary--selected");
          this._deniedTransaction.classList.add("bt-summary--selected");

          const status = "Denied";
          handler(status);
          this._deniedTransaction.dataset.clicked = "true";
          this._successTransaction.dataset.clicked = "false";
        }
      })
    );
  }

  renderAddTransaction(transaction) {
    if (!transaction) return; // Guard against null
    const markup = `
      <div class="bt-main--transaction" data-id="${transaction.id}">
        <span>$${transaction.amount.toFixed(2)}</span>
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
    document.querySelector(
      ".bt-balance--total span:last-child"
    ).textContent = `$${total.toFixed(2)}`;
    document.querySelector(
      ".bt-balance--income span:last-child"
    ).textContent = `$${income.toFixed(2)}`;
    document.querySelector(
      ".bt-balance--expense span:last-child"
    ).textContent = `$${expense.toFixed(2)}`;
  }

  renderSummary(transaction) {
    const markup = `
      <div class="bt-activity" data-id="${transaction.id}">
        <span class="bt-activity--amount">${transaction.amount}</span>
        <span class="bt-activity--type">${transaction.type}</span>
        <span class="bt-activity--status">${transaction.status}</span>
      </div>
    `;

    document
      .querySelector(".bt-summary")
      .insertAdjacentHTML("beforeend", markup);
  }
}

export default new View();
