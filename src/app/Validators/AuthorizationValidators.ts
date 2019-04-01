import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export const passwordsValidator = (group: FormGroup) => {
    if (group.controls.password.value === group.controls.repeatPassword.value)  {
        return null;
    }

    return {passwordValidator: {message: 'password not equal'}};

};

export class Matcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return form.control.controls.passwords.hasError('passwordValidator');
    }
}
