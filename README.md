# 🚀 PriorityFlow — Angular Task Management System

**Course:** Modern Web Development  
**Focus:** Reactive State Management | Angular Signals  
**Tooling:** Angular 17+ · TypeScript · LocalStorage API · CSS3  

---

## 📊 Project Overview

**PriorityFlow** is a high-performance, reactive task management application. Unlike traditional Angular apps that rely on zone-based change detection, this project implements **Angular Signals** to achieve fine-grained reactivity and optimized DOM rendering.

---

## 📌 Technical KPIs

| Feature | Implementation |
|-----|-------|
| **State Engine** | Angular Signals (`signal`, `computed`) |
| **Data Persistence** | Browser LocalStorage API |
| **Reactivity** | On-Push equivalent fine-grained updates |
| **Styling** | Custom CSS3 with dynamic `[ngClass]` |
| **Logic** | Centralized Singleton Service |

---

## 📈 Features & Functionality

| Module | Description |
|-------|-------------|
| **Priority Engine** | Dynamic badge system: **High** (Red), **Medium** (Orange), **Low** (Green) |
| **Smart Filters** | Real-time computed filtering for `All` · `Active` · `Completed` tasks |
| **Inline CRUD** | Full Create, Read, Update (Double-click to edit), and Delete support |
| **Auto-Save** | Event-driven persistence to prevent data loss on browser refresh |
| **Validation** | Prevention of empty task submissions and whitespace handling |

---

## 🧹 Engineering Steps

- **Architected Singleton Service:** Moved all business logic out of the component and into `todo.service.ts` for better maintainability.
- **Implemented Signals:** Switched from standard arrays to `signal<Task[]>` to leverage the latest Angular 17 performance features.
- **Dynamic Styling:** Created a custom CSS theme using attribute selectors and `toLowerCase()` mapping for priority badges.
- **Bug Resolution:** Resolved template compilation errors (NG5002) and pathing issues during the deployment phase.
- **Version Control:** Managed the full development lifecycle using Git, including branching and remote repository synchronization.

---

## 🛠️ Tools Used

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)

---

## 📂 Files in this Repository

| File | Description |
|------|-------------|
| `src/app/todo.service.ts` | The core "Logic Engine" using Angular Signals |
| `src/app/app.html` | Semantic template with reactive data-binding |
| `src/app/app.css` | Modern UI styles and priority color definitions |
| `src/app/app.ts` | Component controller and service injection |

---

## 🚀 Installation & Usage

1. **Clone & Install:**
   ```bash
   git clone [https://github.com/sachumonpsajeev-cyber/PriorityFlow-Angular.git](https://github.com/sachumonpsajeev-cyber/PriorityFlow-Angular.git)
   npm install
👤 Author
Sachumon P Sajeev MSc Data Science & AI — TSI University, Riga

LinkedIn · GitHub
