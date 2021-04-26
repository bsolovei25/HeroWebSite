import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ChooseletterDirective} from '../chooseletter.directive';
import {AuthService} from '../auth.service';
import {GetServiceService} from '../hero-api-get-folder/get-service.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent implements OnInit {
  @Output() gettedHeroListByName: EventEmitter<object[]> = new EventEmitter<object[]>();

  userName = '';
  var = '';
  searchList: Array<any> = [];
  chosedProperty: string = '';
  private userSub!: Subscription;
  constructor(private router: Router, private authService: AuthService, private GetServiceService: GetServiceService) { }
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

  ShowAllLetters(event: any) {
    if (this.ShouldLettersShow) {
      this.chosedProperty = event.target.innerText;
      this.searchList = [];
      console.log(this.chosedProperty );
      console.log(event.target.innerText );
      this.GetServiceService.fetchPosts(this.chosedProperty).subscribe(responseData => {
        this.emitterFunction(responseData);
      });
    }
    this.ShouldLettersShow = !this.ShouldLettersShow;
    // this.GetServiceService.fetchPosts(this.chosedProperty).subscribe(responseData => {
    //   //console.log(responseData.results);
    //   //this.gettedHeroListByName.emit(responseData.results);
    //   this.emitterFunction(responseData);
    // }, error => {
    //   this.error = error.message;
    // })
  }
  emitterFunction(responseData: any){
    this.gettedHeroListByName.emit(responseData.results);
  }
}
