import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {


  private _url="http://localhost:3000/enroll";
  constructor(private httpClient : HttpClient) { }
  enroll(user:User)
  {
    return  this.httpClient.post<any>(this._url,user).pipe(catchError(this.catchErrorHandler));
  }

  catchErrorHandler(error:HttpErrorResponse)
  {
 return throwError(error); 
  }

}
