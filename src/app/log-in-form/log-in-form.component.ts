import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {forbiddenEmailValidator, forbiddenPasswordValidator, MyValidators} from '../my.validators';
import {Post} from '../post.model';
import {UserautificationModel} from '../userautification.model';
import {UserService} from '../user.service';

import {AuthService} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../post.service';
import {Observable, Subscription} from 'rxjs';
import {AuthResponceData} from '../auth.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})



export class LogInFormComponent implements OnInit {
  isAuthenticated = false;
  private userSub!: Subscription;
  form!: FormGroup;
  formEmail!: string;
  formPassword!: string;
  isLoginMode = true;
  isLoading = false;
  error: any = null;

  @Input() prop!: any;
  loadedPosts: UserautificationModel[] = [];
  IsSameUserName = true;


  constructor(private http: HttpClient,
              private UserService: UserService,
              private router: Router,
              private authService: AuthService)  { }

  emailChange(): void{
    this.formEmail = this.form.controls.email.value;
  }

  passwordChange(): void{
    this.formPassword = this.form.controls.password.value;
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
    // this.userSub = this.authService.user.subscribe(user => {
    //   console.log('i have changed');
    //   console.log(user);
    //   console.log(!!user);
    //   this.isAuthenticated = !!user;
    // })
    this.form = new FormGroup({
      email: new FormControl('bS@gmail.com', [
        Validators.required,
        forbiddenEmailValidator(/^[\w-\.]+@([\w-]+\.)+(com|net|org|co|us)$/g)
      ]),
      password: new FormControl('sW2sdadf', [
        Validators.required,
        forbiddenPasswordValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g),
      ]),
    });
  }



  getEmail(): any {
    return this.form.controls.email.value;
  }



  getPassword(): any {
    return this.form.controls.password.value;
  }

  checkPasswordEmail(): boolean {
    if (this.formEmail !== undefined && this.formPassword !== undefined){
      return  this.formEmail.toLowerCase().indexOf(this.formPassword.toLowerCase()) !== -1;

    } else {
      return false;
    }
  }

  onCreatePost(postData: UserautificationModel) {
    //this.UserService.createAndStoreUser(postData.password, postData.email, postData.dateCName);
    this.formEmail = this.form.value.email;
    this.formPassword = this.form.value.password;
    let authObs: Observable<AuthResponceData>;
    this.isLoading = true;
    // if (this.form.invalid) {
    //   return;
    // }
    if (this.isLoginMode){
      authObs = this.authService.login(this.formEmail, this.formPassword);
    } else {
      authObs = this.authService.signup(this.formEmail, this.formPassword);
    }

    authObs.subscribe(
      post => {
        console.log('log-in-form console')
        console.log(post);
        this.isLoading = false;
        this.router.navigate(['/heropick']);
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });

    this.form.reset();
  }

}


