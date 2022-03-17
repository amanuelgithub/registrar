import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Class } from '../interfaces/class';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private classesUrl = 'api/classes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  

  /** POST: add a new class to the server */
  addClass(newClass: Class): Observable<Class> {
    return this.http.post<Class>(this.classesUrl, newClass, this.httpOptions).pipe(
      tap((newClass: Class) => this.log(`added class w/ id=${newClass.id}`)),
      catchError(this.handleError<Class>('addClass'))
    );
  }
  
  /** PUT: update the class on the server */
  updateClass(newClass: Class): Observable<any> {
    return this.http.put(this.classesUrl, newClass, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${newClass.id}`)),
      catchError(this.handleError<any>('updateClass'))
    );
  }

  /** GET heroes from the server */
  getClasss() : Observable <Class[]> {
    return this.http.get<Class[]>(this.classesUrl).pipe(
      tap(_=> this.log('fetched classes.')),
      catchError(this.handleError<Class[]>('getClasss', []))
    );
  }

  /** GET class by id. Will 404 if id not found */
  getClass(id: number) : Observable<Class>{
    const url = `${this.classesUrl}/${id}`;

    return this.http.get<Class>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Class>(`getHero id=${id}`))
    );
  }

  /** DELETE: delete the class from the server */
  deleteClass(id: number): Observable<Class> {
    const url = `${this.classesUrl}/${id}`;

    return this.http.delete<Class>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted class id=${id}`)),
      catchError(this.handleError<Class>('deleteClass'))
    );
  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ClassService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
