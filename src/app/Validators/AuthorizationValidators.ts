import {FormGroup} from '@angular/forms';

export const passwordsValidator = function(group: FormGroup) {
  if (group.controls['password'].value == group.controls['repeatPassword'].value)  {
      return null
  } else {
      return {passwordValidator: {message: 'password not equal'}}
  }
};
