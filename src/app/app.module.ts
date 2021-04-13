import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComponentHttpComponent } from './component-http/component-http.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { HttpPostComponent } from './firbase-http/http-post/http-post.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { environment } from 'src/environments/environment';


const appRoutes: Routes = [
  {path: '', component: NavBarComponent},
  {path: 'login', component: LogInFormComponent},
  {path: 'signin', component: SignInFormComponent},
  {path: 'request', component: HttpPostComponent},
  {path: 'heropick', component: HeroSelectComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentHttpComponent,
    LogInFormComponent,
    NavBarComponent,
    SignInFormComponent,
    HttpPostComponent,
    LoadingSpinnerComponent,
    HeroSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
