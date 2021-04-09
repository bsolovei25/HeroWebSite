import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {forbiddenEmailValidator, forbiddenPasswordValidator, MyValidators} from '../my.validators';
import {Post} from '../post.model';
import {UserautificationModel} from '../userautification.model';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../post.service';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})



export class LogInFormComponent implements OnInit {
  @ViewChild('formGr') formGroupElem !: NgForm
  form!: FormGroup;
  formEmail!: string;
  formPassword!: string;
  isLoginMode = true

  @Input() prop!: any;
  loadedPosts: UserautificationModel[] = [];
  IsSameUserName = true

  constructor(private http: HttpClient, private UserService: UserService) { }

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
    this.form = new FormGroup({
      email: new FormControl('bS@gmail.com', [
        Validators.required,
        //forbiddenEmailValidator(/^[\w-\.]+@([\w-]+\.)+(com|net|org|co|us)$/g)
      ]),
      password: new FormControl('sW2sdadf', [
        Validators.required,
        //forbiddenPasswordValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g),
      ]),
      dateCName: new FormControl('', [
        Validators.required
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
    // Send Http request
    // console.log(postData)
    // this.http
    //   .post<{name: string}>('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json', postData)
    //
    //
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
    console.log(postData);
    this.checkValuesIdentical(postData);
    console.log(this.IsSameUserName)
    this.UserService.createAndStoreUser(postData.password, postData.email, postData.dateCName);
    this.form.reset()

  }
  checkValuesIdentical(postData: UserautificationModel){

    console.log(postData.email);
    this.UserService.getAllUsers().subscribe(post => {
      this.loadedPosts = post;
      console.log(this.loadedPosts)
      for (let i of this.loadedPosts) {
        if (postData.email === i.email){
          this.IsSameUserName = false;
        }
      }
    });
  }


}


