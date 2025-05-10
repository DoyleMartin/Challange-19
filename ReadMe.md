# Tech Quiz App

This is a dynamic, interactive **Tech Quiz App** built with React and TypeScript. The project began from provided starter code and was extended with functionality and comprehensive testing using **Cypress**.

## ✨ Features

- Start a tech quiz with randomly fetched questions
- Answer multiple-choice questions
- Score displayed at the end of the quiz
- Option to restart the quiz
- Responsive design with clean UI

## 🧪 Testing

This project includes both **End-to-End (E2E)** and **Component Tests** written using [Cypress](https://www.cypress.io/).

### ✅ Component Tests
Each core component is tested in isolation, including:
- `Quiz`: full quiz flow
- `QuestionCard` (if separated): rendering and answering logic
- `ScoreDisplay`: shows the final score and allows quiz reset

### ✅ E2E Tests
End-to-end user flow tests include:
- Quiz start
- Question progression
- Answer evaluation
- Completion and score summary
- Quiz restart

## 🔧 Tech Stack

- **React** with **TypeScript**
- **Vite** (or CRA depending on setup)
- **Cypress** for testing
- Bootstrap/Custom styles for layout

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start the app

```bash
npm run dev
```

### Run Cypress component tests

```bash
npx cypress open --component
```

### Run Cypress E2E tests

```bash
npx cypress open --e2e
```

## 📌 Notes

- The quiz data is fetched from a custom API service.
- The app was bootstrapped from starter code and expanded with tests and improved UI/UX logic.
- Great for demonstrating knowledge of **React testing practices** and **Cypress testing strategies**.

---

Made with ❤️ during Columbia Engineering Full-Stack Bootcamp.
