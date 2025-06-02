Budget Tracker
A simple web-based application to manage personal finances by tracking income and expense transactions, displaying balances, and filtering transactions by status (Success or Denied). Built with HTML, CSS, and JavaScript, it uses local storage for persistent data and a modular architecture for maintainability.
Table of Contents

Features
Demo
Installation
Usage
Project Structure
Technologies
Contributing
License

Features

Add Transactions: Input income or expense transactions with amount, type, and description.
Balance Tracking: Displays total balance, income, and expense for successful transactions.
Transaction Filtering: View transactions filtered by "Success" or "Denied" status in a summary section.
Persistent Storage: Saves transactions to local storage for persistence across sessions.
Responsive Design: Clean, grid-based layout with a dark theme for readability.
Modular Code: Organized with separate concerns for model, view, and controller.

Demo
https://budget-tracker-keiwan.netlify.app/

Installation

Clone the Repository:
git clone https://github.com/morgothqwe/budget-tracker.git

Navigate to the Project Directory:
cd budget-tracker

Open the Application:

Open index.html in a web browser (e.g., Chrome, Firefox) directly, or
Serve the project using a local development server (recommended):npx http-server

Then navigate to http://localhost:8080 in your browser.

Note: The app uses ES modules, so a local server is required for proper JavaScript module loading.

Usage

Add a Transaction:
Enter an amount (e.g., 100.50), select the type (Income or Expense), and provide a description.
Click the "Proceed" button to add the transaction.
Transactions default to "Success" status and appear in the transaction list.

View Balances:
The balance section displays the total balance (income minus expenses for "Success" transactions), total income, and total expenses.

Filter Transactions:
Click "Success" or "Denied" in the summary section to view transactions with the respective status.
Only one filter can be active at a time, and clicking the same filter again does nothing to optimize performance.

Data Persistence:
Transactions are saved to the browser's local storage and persist across page reloads.
To reset data, uncomment the clearLocalStorage call in controller.js (for development purposes).

Project Structure
budget-tracker/
├── index.html # Main HTML file with the app structure
├── main.css # Styles for layout, theming, and responsiveness
├── config.js # Configuration file with constants (e.g., local storage key)
├── model.js # Data management (state, transactions, local storage)
├── view.js # UI rendering and event handling
├── controller.js # Connects model and view, handles business logic
└── README.md # Project documentation

index.html: Defines the app's layout, including transaction form, list, balance, and summary sections.
main.css: Uses CSS Grid and custom properties for a dark-themed, responsive design.
config.js: Stores constants like the local storage key (transactions).
model.js: Manages transaction data, including adding transactions, calculating balances, and handling local storage.
view.js: Handles DOM manipulation and event listeners for user interactions.
controller.js: Orchestrates the app by connecting the model and view, initializing the app, and handling user actions.

Technologies

HTML5: Structure and content.
CSS3: Styling with CSS Grid and custom properties.
JavaScript (ES Modules): Logic for transaction management, UI updates, and local storage.
Local Storage: Persistent storage for transactions.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request with a clear description of your changes.

Please ensure your code follows the existing style and includes relevant tests or documentation updates.
License
This project is licensed under the MIT License. See the LICENSE file for details.
