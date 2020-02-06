import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { TNodeParent, TNodeChild } from './data-types/node';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  
  private BASE_URL = 'http://localhost:3000/categories';

  constructor(public http: HttpClient) { }

  getTree(): Observable<TNodeParent[]> {
    return this.http.get(this.BASE_URL )
    .pipe(map((res: any) =>  res))
  }
  addNode(node: TNodeChild): Observable<any> {
    return this.http.post(this.BASE_URL, node, httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
}