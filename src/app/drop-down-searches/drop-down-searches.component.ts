import {ElementRef, Input, Output, ViewChild} from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth.service';
import {GetServiceService} from '../hero-api-get-folder/get-service.service';


@Component({
  selector: 'app-drop-down-searches',
  templateUrl: './drop-down-searches.component.html',
  styleUrls: ['./drop-down-searches.component.scss']
})

export class DropDownSearchesComponent implements OnInit {
  searchList: Array<any> = [];
  chosedProperty: string = '';
  userName = '';
  error = '';
  private userSub!: Subscription;
  val = true;
  //loadedPosts: PostHeroModel[] = [];
  @Output() gettedHeroListByName: EventEmitter<object[]> = new EventEmitter<object[]>();
  loadedPosts = [];

  public seriesList: Array<any> = [
    {
      "name": "Prison Break",
      "description": "Structural Engineer Michael Scofield turns himself into the Fox River Penitentiary in order to break out his brother Lincoln Burrows, who is on death row for the murder of the Vice President's brother. But Lincoln was set up by some of the Company (an agency formed by corrupt government officials) guys, headed by General Jonathan Krantz. Michael breaks out from Fox River with his brother Lincoln and other convicts.",
      "genres": "Action, Crime, Drama, Mystery, Thriller",
      "releaseDate": "29 August 2005 (USA)"
    },
    {
      "name": "Vikings",
      "description": "The adventures of Ragnar Lothbrok: the greatest hero of his age. The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.",
      "genres": "Action, Drama, History, War",
      "releaseDate": "3 March 2013 (USA)"
    },
    {
      "name": "Person of Interest",
      "description": "A billionaire software-genius named Harold Finch creates a Machine for the government that is designed to detect acts of terror before they can happen, by monitoring the entire world through every cell-phone, email and surveillance camera. Finch discovered that the machine sees everything, potential terrorist acts and violent crimes that involve ordinary people.",
      "genres": "Action, Drama, Mystery, Sci-Fi, Thriller",
      "releaseDate": "22 September 2011 (USA)"
    }
  ];

  constructor(private authService: AuthService, private GetServiceService: GetServiceService) { }

  fetchFunction(){
    console.log(this.userName);
    console.log(this.chosedProperty);
    this.GetServiceService.fetchPosts().subscribe(responseData => {
      //this.loadedPosts = responseData;
      this.gettedHeroListByName.emit(responseData.results);
    }, error => {
      this.error = error.message;
    })
  }

  checkIfEmpty() {
    const globalRegex = new RegExp('^[A-Za-z]+$', 'g');
    return !globalRegex.test(this.chosedProperty);
  }

  fetchSeries(event: any){
    if (event.target.value === ''){
      this.searchList = [];
    } else {
      this.searchList = this.seriesList.filter(series => {
        return series.name.toLowerCase().startsWith(event.target.value.toLowerCase());
      });
    }
  }

  SwapInputValue(event: any) {
    console.log(this.chosedProperty );
    console.log(event.target.innerText );
    this.chosedProperty = event.target.innerText;
    this.searchList = [];
  }



  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.userName = user.email;
    });
  }

}
