import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComponentHttpComponent } from './component-http/component-http.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserAutificationComponent } from './nav-bar/user-autification/user-autification.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';


const appRoutes: Routes = [
  {path: '', component: NavBarComponent},
  {path: 'login', component: LogInFormComponent},
  {path: 'signin', component: SignInFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentHttpComponent,
    LogInFormComponent,
    NavBarComponent,
    UserAutificationComponent,
    SignInFormComponent
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
