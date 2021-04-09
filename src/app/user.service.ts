import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {UserautificationModel} from './userautification.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserService {
  constructor(private http: HttpClient) {
  }
  createAndStoreUser(nickname: string, email: string, date: Date){
    const postData: UserautificationModel = {email: email, password: nickname, dateCName: date}
    this.http
      .post<{name: string}>('https://base-for-herosite-default-rtdb.firebaseio.com/users.json'
        , postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  getAllUsers() {
    return this.http.get<{[key: string]: UserautificationModel}>('https://base-for-herosite-default-rtdb.firebaseio.com/users.json')
      .pipe(map(responseData => {
        const postArray = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id: key})
          }
        }
        return postArray;
      })
      );
  }

}

