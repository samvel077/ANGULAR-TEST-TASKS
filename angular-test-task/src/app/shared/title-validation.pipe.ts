import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'titleValidation'
})
export class TitleValidationPipe implements PipeTransform {
   transform(titleLength: number, minLength: number = 3, maxLength: number = 10) {
      if (titleLength >= minLength && titleLength <= maxLength) {
         return false
      }

      return true
   }
}