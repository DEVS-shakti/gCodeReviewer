# gCodeReviewer
A code reveiwer for enhancing your codes



# 🚀 gCodeReviewer

**AI-powered code reviewer** built with **React JS** and **Google APIs** to help developers improve, refactor, and secure their code. Supports GitHub repository cloning, multi-language review, and AI-based suggestions via Google Gemini.

---

## 🔧 Features

### 🎯 Core Features
- ✅ **Google OAuth 2.0 Authentication**
- ✅ **Clone GitHub/GitLab Repositories**
- ✅ **Upload ZIP Projects or Files**
- ✅ **Multi-language AI Code Review (JS, Python, Java, etc.)**
- ✅ **Linting (ESLint, Prettier)**
- ✅ **Static Analysis (SonarQube-compatible)**

### 💡 AI-Powered Reviews
- 💬 Code Optimization Suggestions
- 🛠 Bug & Error Detection
- 🔐 Security Flaws & Vulnerabilities
- 🎯 Language-specific Improvements
- 🧠 Powered by Google Gemini Pro / Flash 2.0

### 📂 File Handling
- 📁 File Tree Visualization
- 📝 Monaco Code Editor Integration
- 📌 Inline AI Comments & Suggestions
- 🧾 GitHub-style Diff Viewer

### 📤 Export & Reports
- 📦 Export review as **PDF**, **Markdown**, or **GitHub Issue**
- 💬 One-click “Apply Suggestion” feature

---

## 🛡️ Authentication & Security

- 🔐 **Google OAuth2** with secure token handling
- 🔑 GitHub token integration (secure via server/.env)
- 🛡 Rate-limiting and abuse prevention
- 🔒 End-to-end encrypted communication (HTTPS)

---

## 🧰 Tech Stack

| Category          | Tool/Library                       |
|------------------|------------------------------------|
| Frontend         | React, TailwindCSS or shadcn/ui    |
| Auth             | Firebase Auth / Google OAuth       |
| AI Review        | Google Gemini Pro / Flash 2.0 API  |
| GitHub Support   | `@octokit/rest`, Git CLI           |
| Editor           | Monaco Editor / CodeMirror         |
| File Tree        | `react-file-tree`, `react-sortable-tree` |
| Backend (optional) | Node.js, Express                  |
| Testing          | Jest, React Testing Library, Cypress |
| CI/CD            | GitHub Actions                     |

---

## 📁 Project Structure

gCodeReviewer/
├── src/
│ ├── components/
│ ├── pages/
│ ├── api/
│ ├── hooks/
│ └── App.jsx
├── server/
│ └── cloneHandler.js
├── public/
├── utils/
├── config/
├── assets/
└── .env