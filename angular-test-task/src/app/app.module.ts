import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from './material.module';
import { TitleValidationPipe } from './shared/title-validation.pipe';


@NgModule({
   declarations: [
      AppComponent,
      TodoFormComponent,
      TodoComponent,
      TitleValidationPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NoopAnimationsModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
