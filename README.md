### Simple Professional Calculator

A minimal, dark‑themed calculator web app built with pure HTML, CSS, and JavaScript.  
Designed to feel like a modern product UI, with realistic button depth, smooth interactions, and a clean layout.

🔗 **Live Demo:** https://pragadish-v.github.io/calculator/

---

## Preview

<img width="1432" height="799" alt="Screenshot 2026-01-04 233541" src="https://github.com/user-attachments/assets/ff1bea51-30ed-4002-8096-411f681a54b6" />

---

## Features

### Dark professional UI
- Calm, focused color palette with soft shadows and rounded edges.  
- Clear visual hierarchy for numbers, operators, clear, and equals.

### Basic calculator operations
- Supports addition, subtraction, multiplication, and division.  
- Handles multi‑step expressions using a simple input expression.

### Keyboard‑friendly interaction (UI level)
- Large, clearly grouped buttons for easy clicking.  
- Read‑only display to prevent accidental editing.

### Responsive layout
- Optimized for desktop view, adapts down to smaller screens.

---

## Tech Stack

- **HTML5** – Structure and layout  
- **CSS3** – Dark theme styling, shadows, and interaction states  
- **JavaScript (vanilla)** – Calculator logic and event handling  

---

## Project Structure

```text
.
├── index.html      # Main calculator markup
├── styles.css      # Dark professional theme
└── script.js       # Calculator logic (append, clear, evaluate)
```
---

## How It Works

- The display is a read‑only `<input>` that shows the current expression and result.  
- Each button calls small JavaScript functions:
  - `appendNumber()` – adds digits to the expression  
  - `setOperation()` – appends operators like `+`, `-`, `*`, `/`  
  - `clearDisplay()` – resets the expression  
  - `calculateResult()` – evaluates the expression and shows the result  

---

## Running the Project Locally

### Clone the repository

```bash
git clone https://github.com/pragadish-v/calculator.git
cd calculator
```
### Open in browser

- Simply open `index.html` in your browser, or  
- Use a simple live server (for example, the VS Code Live Server extension).

---

## Possible Improvements

- Add keyboard support for digits and operators.  
- Show calculation history below the display.  
- Add light/dark theme toggle.  
- Improve error handling for invalid expressions.  

---

## About

This project was created to practice:

- Building small, focused frontend components  
- Crafting a professional dark UI with only CSS  
- Implementing basic calculator logic in vanilla JavaScript  

Feel free to fork, open issues, or suggest improvements!
