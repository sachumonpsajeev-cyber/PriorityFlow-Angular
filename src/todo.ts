// src/todo.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoService {
  tasks: any[] = [];
  currentFilter: 'All' | 'Active' | 'Completed' = 'All';
  editingIndex: number = -1;

  constructor() {
    const saved = localStorage.getItem('myTasks');
    if (saved) this.tasks = JSON.parse(saved);
  }

  // MAKE SURE THIS IS HERE
  save() {
    localStorage.setItem('myTasks', JSON.stringify(this.tasks));
  }

  add(title: string, priority: any) {
    if (title.trim()) {
      this.tasks.push({ title, completed: false, priority });
      this.save();
    }
  }

  // ... (ensure remove, toggle, and updateTask also call this.save())
}