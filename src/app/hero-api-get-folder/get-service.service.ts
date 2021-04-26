import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
//import {Post} from './posheroname.model';
import {catchError, map} from 'rxjs/operators';
import {Todo} from '../app.component';
import {Observable} from 'rxjs';
import {HeroModel} from '../models/HeroModel.model';

@Injectable({
  providedIn: 'root'
})



export class GetServiceService {

  heroes: HeroModel [] = [];

  constructor(private http: HttpClient) {}

  fetchPosts(searchText: string){
    return this.http.get(`https://superheroapi.com/api.php/2819926168249278/search/${searchText}`);
      // .map((res: Response) => res.json().response);
        // .response.map((user: HeroModel) => new HeroModel().deserialize(user)));
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
