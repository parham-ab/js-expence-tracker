# Ledger — JS Expense Tracker

A lightweight, client-side expense tracker built with vanilla JavaScript and styled with Tailwind CSS. Add income and expense entries, watch your balance update in real time, and see spending broken down by category.

## Features

- Add income or expense entries with a name, amount, date, and category
- Live-updating balance, income, and expense totals
- Category breakdown shown as percentages
- Delete individual entries, with totals and row numbers recalculated automatically
- Responsive, dark-themed UI

## Tech stack

- HTML5
- Vanilla JavaScript (no framework)
- Tailwind CSS (compiled via the Tailwind CLI)

## Project structure

```
js-expense-tracker/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── input.css
│   │       └── output.css
│   ├── scripts/
│   │   └── script.js
│   └── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

## Getting started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/parham-ab/js-expence-tracker
cd js-expense-tracker
npm install
```

### Building the CSS

Tailwind compiles `src/assets/styles/input.css` into `src/assets/styles/output.css`. Run the build script whenever you change styles or class names in the markup:

```bash
npm run build:css
```

For active development, run it in watch mode so changes rebuild automatically:

```bash
npm run build:css -- --watch
```

> Adjust the script names above to match whatever is defined in `package.json` if they differ.

### Running the app

This is a static site with no server-side logic. Open `src/index.html` directly in a browser, or serve the `src` folder with a tool such as the VS Code Live Server extension.

## Usage

1. Choose **Type** (Expense or Income).
2. Choose a **Category**.
3. Enter a **Date**, **Name**, and **Amount**.
4. Click **Add entry**. The table, totals, and category breakdown update automatically.
5. Click the delete icon on any row to remove that entry and recalculate totals.

## License

This project is available for personal and educational use.
