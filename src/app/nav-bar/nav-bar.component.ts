import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LogInFormComponent} from '../log-in-form/log-in-form.component';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userName = '';
  private userSub!: Subscription;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      //console.log(this.userName);
      if (user){
        this.userName = user.email;
      }
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
