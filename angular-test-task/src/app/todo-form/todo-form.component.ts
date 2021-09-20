import { Component } from '@angular/core';
import { TodoService, Todo } from '../shared/todo.service'
import {
   trigger,
   state,
   style,
   animate,
   transition,
} from '@angular/animations';

@Component({
   selector: 'app-todo-form',
   templateUrl: './todo-form.component.html',
   styleUrls: ['./todo-form.component.scss'],
   animations: [
      trigger('openClose', [
         state('open', style({
            transform: 'translateY(0px)'
         })),
         state('closed', style({
            transform: 'translateY(-60px)'
         })),
         transition('open <=> closed', [
            animate(200)
         ]),
      ]),
   ],
})
export class TodoFormComponent {
   title = ''
   open: boolean

   constructor(public todoService: TodoService) { }

   addTodo(minLength: number = 3, maxLength: number = 10) {
      if (
         this.title.trim().length >= minLength
         && this.title.trim().length <= maxLength
      ) {
         const todo: Todo = {
            title: this.title,
            id: Date.now(),
         }

         if (!this.todoService.todos.length) {
            this.open = true
         }

         this.todoService.addTodo(todo)
         this.title = ''
      }
   }
}


