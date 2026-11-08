# 🚀 Interactive Markdown Previewer

A lightweight, high-performance web application built with **React** and **Vite** that renders raw Markdown text into formatted HTML dynamically in real-time. 

This project demonstrates core modern React architecture, focusing on predictable data flow, controlled component inputs, and clean separation of concerns using functional programming principles.

## 🛠️ Tech Stack & Architecture
* **React 19** (Functional Components & Hooks)
* **Vite** (Next-generation lightning-fast build tool)
* **Marked** (Industry-standard parsing engine for Markdown conversion)
* **ESLint** (Static code linting for production-ready quality)

## 💡 Key React Concepts Demonstrated
* **Declarative Rendering:** The UI automatically re-renders the parsed HTML string the exact millisecond the underlying string state changes.
* **Controlled Components:** Handled real-time textarea state mutations smoothly using the `useState` hook and synthetic user events (`onChange`).
* **Optimized DOM Insertion:** Safely rendered compiled HTML strings via the `dangerouslySetInnerHTML` pattern.

## 🚀 Local Installation & Setup

To clone and run this application on your machine:

```bash
# Clone the repository
git clone https://github.com

# Navigate into the directory
cd markdown-previewer

# Install dependencies
npm install

# Start the local development server
npm run dev
```