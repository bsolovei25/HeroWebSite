import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {forbiddenEmailValidator, forbiddenPasswordValidator, MyValidators} from '../my.validators';
import {Post} from '../post.model';
import {UserautificationModel} from '../userautification.model';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})



export class LogInFormComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('formGr') formGroupElem !: NgForm
  form!: FormGroup;
  formEmail!: string;
  formPassword!: string;

  @Input() prop!: any;


  constructor() { }

  emailChange(): void{
    this.formEmail = this.form.controls.email.value;
  }

  passwordChange(): void{
    this.formPassword = this.form.controls.password.value;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('bS@gmail.com', [
        Validators.required,
        forbiddenEmailValidator(/^[\w-\.]+@([\w-]+\.)+(com|net|org|co|us)$/g)
      ]),
      password: new FormControl('sW2sdadf', [
        Validators.required,
        forbiddenPasswordValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g),
      ])
    })
  }

  // tslint:disable-next-line:typedef
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes)

  }

  getEmail(): any {
    return this.form.controls.email.value;
  }



  getPassword(): any {
    return this.form.controls.password.value;
  }

  ngAfterViewInit(): void{

  }

  checkPasswordEmail(): boolean {
    if (this.formEmail !== undefined && this.formPassword !== undefined){
      return  this.formEmail.toLowerCase().indexOf(this.formPassword.toLowerCase()) !== -1;

    } else {
      return false;
    }
  }

  onSubmit(postData: UserautificationModel) {

  }
}
