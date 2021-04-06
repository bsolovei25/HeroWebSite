import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { forbiddenPasswordValidator, forbiddenUserNameValidator} from '../my.validators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit, OnChanges {
  form: any;
  formPassword!: string;
  formUserName!: string;

  constructor() { }
  @Input() prop!: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        forbiddenUserNameValidator(/[a-zA-Z][a-zA-Z]{3,32}$/gi)
      ]),
      password: new FormControl('', [
        Validators.required,
        forbiddenPasswordValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g),
      ])
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.prop)

  }

  passwordChange(): void{
    this.formPassword = this.form.controls.password.value;
  }

  checkPasswordUserName(): boolean {
    if (this.formUserName !== undefined && this.formPassword !== undefined){
      return  this.formUserName.toLowerCase().indexOf(this.formPassword.toLowerCase()) === -1;

    } else {
      return false;
    }
  }

  userNameChange(): void{
    this.formUserName = this.form.controls.username.value;
  }
}
