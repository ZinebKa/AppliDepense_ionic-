import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Depense}  from '../data/depense';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = environment.API_URL+"api/depense";


  constructor( private http: HttpClient) { }

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

    // l'ajout d'une nouvelle dépense
    createItem(item): Observable<Depense> {
      return this.http
        .post<Depense>(this.base_path+"/add", JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(0),
          catchError(this.handleError)
        )
    }

    // Récupération par l'id
  getItem(id): Observable<Depense> {
    return this.http
      .get<Depense>(this.base_path + '/' + id)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Récupération de toutes les dépenses
  getList(): Observable<Depense> {
    return this.http
      .get<Depense>(this.base_path)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  
  // Modification 
  updateItem(id, item): Observable<Depense> {
    return this.http
      .put<Depense>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Delete item
  deleteItem(id) {
    return this.http
      .delete<Depense>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

}
