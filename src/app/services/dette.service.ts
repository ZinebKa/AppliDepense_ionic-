import { Injectable } from '@angular/core';
import { Dette } from '../data/dette';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetteService {

  base_path_dette = environment.API_URL+"api/dette";

  constructor(private http:HttpClient) { }
   //Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

 
  // l'ajout d'une nouvelle dette
  createItem(item): Observable<Dette> {
    return this.http
      .post<Dette>(this.base_path_dette+"/add", JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Récupération par l'id
getItem(id): Observable<Dette> {
  return this.http
    .get<Dette>(this.base_path_dette + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Récupération de toutes les dettes
getList(): Observable<Dette> {
  return this.http
    .get<Dette>(this.base_path_dette)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Modification 
updateItem(id, item): Observable<Dette> {
  return this.http
    .put<Dette>(this.base_path_dette + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item
deleteItem(id) {
  return this.http
    .delete<Dette>(this.base_path_dette+ '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}


}
