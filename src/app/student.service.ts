import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /** POST: add a new student to the server */
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions).pipe(
      tap((newStudent: Student) => this.log(`added student w/ id=${newStudent.id}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }
  
  /** PUT: update the student on the server */
  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  /** GET heroes from the server */
  getStudents() : Observable <Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap(_=> this.log('fetched students.')),
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  /** GET student by id. Will 404 if id not found */
  getStudent(id: number) : Observable<Student>{
    const url = `${this.studentsUrl}/${id}`;

    return this.http.get<Student>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Student>(`getHero id=${id}`))
    );
  }

  /** DELETE: delete the student from the server */
  deleteStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted student id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  /* GET students whose firstName contains search term */
  searchStudents(term: string): Observable<Student[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Student[]>(`${this.studentsUrl}/?firstName=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found students matching "${term}"`) :
        this.log(`no students matching "${term}"`)),
      catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
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
