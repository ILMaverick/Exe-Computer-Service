import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appConfrontaPasswordValidator]'
})
export class ConfrontaPasswordValidator {

  static passNotEqual: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confPassword = control.get('confPassword');
    return password?.valid && confPassword?.valid && password.value !== confPassword.value ? { passNotEqual: true } : null;
  };

}
