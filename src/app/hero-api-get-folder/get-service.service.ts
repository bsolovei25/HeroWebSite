import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Post} from './posheroname.model';
import { map } from 'rxjs/operators';
import {Todo} from '../app.component';

export interface HeroFound {
  response: string;
  name: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})



export class GetServiceService {

  heroes: HeroFound [] = [];

  constructor(private http: HttpClient) {}

  fetchPosts(){
    return this.http.get<any>('https://superheroapi.com/api.php/2819926168249278/search/aqua')
      // .pipe(map(responceData => {
      //     return responceData;
      //   })
      // );
  }
//   this.http.get<any>('https://superheroapi.com/api.php/2819926168249278/search/aqua')
// .subscribe(response => {
//   console.log(response.results)
//   this.todos = response.results
// })
}
