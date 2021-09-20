import { Injectable } from '@angular/core';

export interface Todo {
   id: number
   title: string
}

@Injectable({
   providedIn: 'root'
})
export class TodoService {
   public todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || []

   constructor() { }

   removeTodo(id: number) {
      this.todos = this.todos.filter(t => t.id !== id)
      localStorage.setItem('todos', JSON.stringify(this.todos))
   }

   addTodo(todo: Todo) {
      this.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(this.todos)) 
   }
}
