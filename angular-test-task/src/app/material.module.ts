import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'

@NgModule({
   imports: [MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
   exports: [MatInputModule, MatButtonModule, MatIconModule, MatCardModule]
})
export class MaterialModule { }