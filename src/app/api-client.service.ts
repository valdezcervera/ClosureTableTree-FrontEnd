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
  
  constructor(public http: HttpClient) { }
  private BASE_URL = 'http://localhost:3000';

  // Tree
  private DELETE_PATH = 'node/delete/node'

  getTree(): Observable<TNodeParent[]> {
    return this.http.get(`${this.BASE_URL}/categories` )
    .pipe(
      map((res: any) =>  res),
      catchError(this.handleError)
    )
  }
  addNode(node: TNodeChild): Observable<any> {
    return this.http.post(`${this.BASE_URL}/categories`, node, httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }
  removeNode(node: TNodeChild): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${this.DELETE_PATH}/${node}`, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  // List
  getList(): Observable<[]> {
    return this.http.get(`${this.BASE_URL}/itemlist`)
    .pipe(
      map((res: any) => res),
      catchError(this.handleError)
      );
  }
  addListItem(item): Observable<any> {
    return this.http.post(`${this.BASE_URL}/itemlist`, item, httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }
  getListItem(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/itemlist/${id}`, httpOptions)
    .pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }
  removeListItem(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/itemlist/${id}`, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  // Error handleling
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