import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService{
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string){
    const postData: Post = {title: title, content: content}
    this.http
      .post<{name: string}>('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json'
        , postData, {
          headers: new HttpHeaders({ 'Custom-Header' : 'hello'}),
          params: new HttpParams().set('print', 'pretty'),

        }
        )


      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  fetchPosts(){
    return this.http.get<{[key: string]: Post}>('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responceData => {
          const postArray: Post[] = [];
          console.log(responceData)
          for (const key in responceData){
            console.log(key)
            if (responceData.hasOwnProperty(key)){
              postArray.push({ ...responceData[key], id: key});
            }
          }
          return postArray;
        })
      );
  }
  deletePosts(){
    return this.http
      .delete('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json');
  }
}
