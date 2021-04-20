import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { HttpPostComponent } from './firbase-http/http-post/http-post.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { ChooseletterDirective } from './chooseletter.directive';



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
    LogInFormComponent,
    NavBarComponent,
    SignInFormComponent,
    HttpPostComponent,
    LoadingSpinnerComponent,
    HeroSelectComponent,
    ChooseletterDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
