
# 📝 To-Do List Web App

A simple and elegant To-Do List web application built using **HTML**, **CSS**, and **Vanilla JavaScript**. This app allows users to add, delete, and mark tasks as completed, with all tasks saved persistently using **localStorage**.

---

## ✨ Features

- ✅ Add new tasks
- ❌ Delete individual tasks
- ✔️ Mark tasks as completed/incomplete
- 🔄 Tasks persist across page reloads using `localStorage`
- 🕒 Sorted by creation time using unique timestamp-based keys
- 🖌️ Responsive, minimal UI styled with CSS Flexbox and Google Fonts

---


## 📂 Project Structure

```
/todo-list-app/
│
├── index.html         # Main HTML file
├── style.css          # CSS styles
├── logic.js           # JavaScript logic (DOM & localStorage)
└── README.md          # This file
```

---

## ⚙️ How It Works

- When you add a task, it is:
  - Displayed dynamically on the page
  - Stored in `localStorage` with a unique `Task{timestamp}` key
- When you check/uncheck a task:
  - Its state is saved using a corresponding `checkbox{TaskID}Status` key
- When the page reloads:
  - Tasks and their checkbox statuses are restored

---

## 🚀 Getting Started

To run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/VinayPratap07/ToDo-web-application.git
   ```
2. Open `index.html` in any modern web browser.
---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, custom styles, responsive layout)
- JavaScript (DOM manipulation, event listeners, localStorage)

---

## 📌 Future Improvements

- [ ] Edit task text
- [ ] Filter tasks (All / Completed / Pending)
- [ ] Task count display
- [ ] Theme toggle (light/dark)
- [ ] Add animations and UI enhancements
---

## 🙌 Author

**Vinay Pratap**  
Feel free to connect with me on [LinkedIn](#) or check out more of my work!
---