# 🔥 Full-Stack Revision Journey

This repository contains all my tasks, projects, and practice work as I rebuild my **full-stack development skills from scratch** — including Node.js, Express, MongoDB, React, and more.

Each folder represents a specific topic or level in my full-stack roadmap


# 📝 CLI Notes App

A simple command-line notes tool built with pure Node.js.

## 🔧 Commands

```bash
node app.js add "title" "body"
node app.js list
node app.js delete "title"
```

## 📁 Files
- `app.js`
- `notes.js`
- `notes.json` (auto-created)


# GitHub User Search 🔍

A lightweight, performance-optimized web application to search for GitHub users and display their profiles in real-time.

## 🚀 Key Features

* **Real-time Search:** Fetches user data as you type.
* **Performance Optimized:** Implements a custom **Debounce** function to prevent API rate-limiting and reduce unnecessary network requests.
* **Error Handling:** Gracefully handles non-existent users (404) and network errors.
* **Clean UI:** Minimalist CSS design.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Logic:** Vanilla JavaScript (ES6+)
* **API:** GitHub REST API

## 🧠 Engineering Concepts Learned

This project was built to master the following core JavaScript concepts:
1.  **Debouncing & Closures:** Implementing a delay mechanism (500ms) to wait for the user to stop typing before firing a request.
2.  **Asynchronous JavaScript:** Using `async/await` and `fetch` to handle API promises cleanly.
3.  **DOM Manipulation:** Dynamically updating the UI based on data state.
4.  **Event Loop:** Understanding how `setTimeout` interacts with the execution stack.

## 📂 Project Structure

```bash
├── index.html    # The skeleton
├── style.css     # The skin
└── script.js     # The brain (Logic & API)
