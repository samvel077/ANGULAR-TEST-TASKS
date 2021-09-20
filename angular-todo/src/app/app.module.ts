import { TodosFilterPipe } from './shared/todos-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFomrComponent } from './todo-fomr/todo-fomr.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFomrComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
