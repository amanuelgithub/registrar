import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StudClass } from '../interfaces/class';
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
  addClass(newClass: StudClass): Observable<StudClass> {
    return this.http.post<StudClass>(this.classesUrl, newClass, this.httpOptions).pipe(
      tap((newClass: StudClass) => this.log(`added class w/ id=${newClass.id}`)),
      catchError(this.handleError<StudClass>('addClass'))
    );
  }
  
  /** PUT: update the class on the server */
  updateClass(newClass: StudClass): Observable<any> {
    return this.http.put(this.classesUrl, newClass, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${newClass.id}`)),
      catchError(this.handleError<any>('updateClass'))
    );
  }

  /** GET heroes from the server */
  getClasss() : Observable <StudClass[]> {
    return this.http.get<StudClass[]>(this.classesUrl).pipe(
      tap(_=> this.log('fetched classes.')),
      catchError(this.handleError<StudClass[]>('getClasss', []))
    );
  }

  /** GET class by id. Will 404 if id not found */
  getClass(id: number) : Observable<StudClass>{
    const url = `${this.classesUrl}/${id}`;

    return this.http.get<StudClass>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<StudClass>(`getHero id=${id}`))
    );
  }

  /** DELETE: delete the class from the server */
  deleteClass(id: number): Observable<StudClass> {
    const url = `${this.classesUrl}/${id}`;

    return this.http.delete<StudClass>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted class id=${id}`)),
      catchError(this.handleError<StudClass>('deleteClass'))
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
