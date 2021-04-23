import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ChooseletterDirective} from '../chooseletter.directive';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {

  userName = '';
  var = '';
  private userSub!: Subscription;
  constructor(private router: Router, private authService: AuthService) { }
  HeroArray: Array<object> = [];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  alpha: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  ShouldLettersShow = false;
  //HeroArray: Array<string> = [];

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      if (user){
        this.userName = user.email;
      }
    });
  }
  getHeroesFound(event: object[]){
    this.HeroArray = event;
    for (let i of this.HeroArray) {
      console.log(i);
    }
  }

  NavigateToWelcomePage() {
    this.router.navigate(['/']);
  }

  ShowAllLetters() {
    this.ShouldLettersShow = !this.ShouldLettersShow;
  }
}
