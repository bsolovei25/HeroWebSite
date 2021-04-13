import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponceData {idToken: string; email: string; refreshToken: string; expiresIn: string; localId: string; registered?: boolean }


@Injectable({
  providedIn: 'root',
})

export class AuthService{
  //user = new Subject<User>();
  // @ts-ignore
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuH7IQkLMg4N95DBGnttVKfxymsxj1LEs',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAutification(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }));
    }
    login (email: string, password: string) {
    return this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCuH7IQkLMg4N95DBGnttVKfxymsxj1LEs',
      {email: email,
        password: password,
        returnSecureToken: true}
      ).pipe(catchError(this.handleError), tap(resData => {
      this.handleAutification(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
    }

    private handleAutification(
      email: string,
      userId: string,
      token: string,
      expiresIn: number) {
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'Unknown error occured';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'Email Already Exists';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Password Invalid';
          break;
        case 'USER_DISABLED':
          errorMessage = 'user disabled';
          break;
      }
      return throwError(errorMessage);
    }
  }

