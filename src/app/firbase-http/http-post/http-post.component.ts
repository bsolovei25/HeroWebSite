import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, subscribeOn} from 'rxjs/operators';
import {Post} from '../../post.model';
import {PostService} from '../../post.service';


@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.scss']
})
export class HttpPostComponent implements OnInit {

  loadedPosts: Post[] = [];
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.fetchPosts().subscribe(request => {
      console.log(request)
      this.loadedPosts = request;
    }, error => {
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData)
    // this.http
    //   .post<{name: string}>('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json', postData)
    //
    //
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe(request => {
      this.loadedPosts = request;
    }, error => {
        this.error = error.message;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {this.loadedPosts = []; } );
    // this.http
    //   .delete('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json')
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });
  }

  // private fetchPosts() {
    // this.http.get<{[key: string]: Post}>('https://base-for-herosite-default-rtdb.firebaseio.com/posts.json')
    //   .pipe(map(responceData => {
    //     const postArray: Post[] = [];
    //     for (const key in responceData){
    //       if (responceData.hasOwnProperty(key)){
    //         postArray.push({ ...responceData[key], id: key});
    //       }
    //     }
    //     return postArray
    //   })
    //   )
    //   .subscribe(posts => {
    //   this.loadedPosts = posts
    // });
  // }
}
