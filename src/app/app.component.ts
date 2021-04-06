import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { MyValidators} from './my.validators';

export interface Todo {
  response: string;
  name: string;
  id?: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('CapitalName') block!: ElementRef;
  @ViewChild('capitalButton') button!: ElementRef;

  todos: Todo[] = [];
  isInputValid: any;
  constructor(private http: HttpClient) {
  }
  title = 'HeroApp';
  validityInput: any;
  myGroup: any;
  ngOnInit(): void {
    this.http.get<any>('https://superheroapi.com/api.php/2819926168249278/search/aqua')
      .subscribe(response => {
        console.log(response.results)
        this.todos = response.results
      })
  }

  disableButton(event:any){
    //console.log(!event.target.validity.valid)
    this.isInputValid = !event.target.validity.valid
  }



}

