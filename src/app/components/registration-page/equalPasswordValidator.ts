import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static stringNotEqual(string: string, toControl:string): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        if (isEmptyInputValue(toControl) || isEmptyInputValue(string)) {
          return null;
        }
  
        return string === control.value ? { 'notEqual': { 'value': value } } : null;
      };
    }
  }