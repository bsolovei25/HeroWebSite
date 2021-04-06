import {AbstractControl, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export function forbiddenEmailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {forbiddenName: {value: control.value}} ;
  };
}

export function  forbiddenPasswordValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {forbiddenName: {value: control.value}};
  };
}


export function  forbiddenUserNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? null : {forbiddenName: {value: control.value}};
  };
}

export class MyValidators {
  form!: FormGroup;
  static isEmailsCorrect(control: FormControl): {[key: string]: any} {
   const regex = /([a-zA-Z0-9_-]+|.){1,3}@[a-zA-Z0-9-_]{1,5}\.(com|net|org|co|us)$/g;
   const found = control.value.match(regex);
   if (!found){
      console.log('return true')
      return {restrictedEmail: true};
   } else {
      console.log('return false')
      return null as any
   }
    // if (['v@mail.ru', 'test@mail.ru'].includes(control.value)){
    //   return {restrictedEmail: true}
    // }
    // return null as any
  }
  static isPasswordCorrect(group: FormGroup): {[key: string]: any} {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
    //const found = group.controls.password.value.match(regex);
    const found = group.value.match(regex);
    //control.value.includes(this.ema)
    console.log(group)
    if (!found){
      console.log('return true')
      return {restrictedEmail: true};
    } else {
      console.log('return false')
      return null as any
    }
  }


  getEmail(): any {
    return this.form.controls.email.value;
  }

  getPassword(): any {
    return this.form.controls.password.value;
  }

}

