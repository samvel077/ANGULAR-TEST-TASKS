import { Todo, TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-todo-fomr',
   templateUrl: './todo-fomr.component.html',
   styleUrls: ['./todo-fomr.component.scss']
})
export class TodoFomrComponent implements OnInit {

   title = ''

   constructor(public todosService: TodosService) { }

   ngOnInit(): void {
   }

   addTodo() {
      const todo: Todo = {
         title: this.title,
         id: Date.now(),
         completed: false,
         date: new Date()
      }

      this.todosService.addTodo(todo)
      this.title = ''
   }

}
