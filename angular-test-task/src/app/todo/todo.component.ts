import { TodoService } from '../shared/todo.service'
import { Component } from '@angular/core';

@Component({
   selector: 'app-todo',
   templateUrl: './todo.component.html',
   styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
   constructor(public todoService: TodoService) { }

   removeTodo(id: number) {
      this.todoService.removeTodo(id)
   }
}
