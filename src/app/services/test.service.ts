import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Test } from '../interfaces/test';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private testsUrl = 'api/tests';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /** POST: add a new test to the server */
  addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(this.testsUrl, test, this.httpOptions).pipe(
      tap((newTest: Test) => this.log(`added test w/ id=${newTest.id}`)),
      catchError(this.handleError<Test>('addTest'))
    );
  }
  
  /** PUT: update the test on the server */
  updateTest(test: Test): Observable<any> {
    return this.http.put(this.testsUrl, test, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${test.id}`)),
      catchError(this.handleError<any>('updateTest'))
    );
  }

  /** GET heroes from the server */
  getTests() : Observable <Test[]> {
    return this.http.get<Test[]>(this.testsUrl).pipe(
      tap(_=> this.log('fetched tests.')),
      catchError(this.handleError<Test[]>('getTests', []))
    );
  }

  /** GET test by id. Will 404 if id not found */
  getTest(id: number) : Observable<Test>{
    const url = `${this.testsUrl}/${id}`;

    return this.http.get<Test>(url).pipe(
      tap(_ => this.log(`fetched test id=${id}`)),
      catchError(this.handleError<Test>(`getTest id=${id}`))
    );
  }

  /** DELETE: delete the test from the server */
  deleteTest(id: number): Observable<Test> {
    const url = `${this.testsUrl}/${id}`;

    return this.http.delete<Test>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted test id=${id}`)),
      catchError(this.handleError<Test>('deleteTest'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`testService: ${message}`);
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
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
