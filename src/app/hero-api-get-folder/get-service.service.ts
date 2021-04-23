import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Post} from './posheroname.model';
import {catchError, map} from 'rxjs/operators';
import {Todo} from '../app.component';



export interface HeroModel {
  id: string;
  name: string;
  powerstats: Powerstats[];
  biography: Biography[];
  appearance: Appearence[];
  work: Work[];
  connections: Connections[];
  image: ImageArray[];
}

interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

interface Biography{
  full_name: string;
  alter_egos: string;
  aliases: string[];
  place_of_birth: string;
  first_appearance: string;
  publisher: string;
  alignment: string;
}

interface Appearence{
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eye_color: string;
  hair_color: string;
}

interface Work{
  occupation: string;
  base: string;
}

interface Connections{
  group_affiliation: string;
  base: string;
}

interface ImageArray {
  url: string;
}

@Injectable({
  providedIn: 'root'
})



export class GetServiceService {

  //heroes: HeroModel [] = [];

  constructor(private http: HttpClient) {}

  fetchPosts(){
    return this.http.get<any>('https://superheroapi.com/api.php/2819926168249278/search/aqua');
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
