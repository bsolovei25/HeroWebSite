import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserautificationModel} from '../userautification.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }


  getAllHeroesByLetter(){
    return this.http.get<{[key: string]: UserautificationModel}>('https://base-for-herosite-default-rtdb.firebaseio.com/users.json')
      .pipe(map(responseData => {
          const postArray = [];
          for (const key in responseData){
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        })
      );
  }
}
