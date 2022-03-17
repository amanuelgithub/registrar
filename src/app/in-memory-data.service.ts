import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Class } from './interfaces/class';
import { Course } from './interfaces/course';
import { Student } from './interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const students = [
        {id: 1, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
        {id: 2, firstName: 'ahhda',lastName: 'fafa', username: '@amfafafan', email: 'fa@gmail.com', age: 23},
        {id: 3, firstName: 'hhalfaf',lastName: 'Girma', username: '@aman', email: 'sthg@gmail.com', age: 23},
        {id: 4, firstName: 'af',lastName: 'Girma', username: '@aman', email: 'legen@gmail.com', age: 23},
        {id: 5, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'rand@gmail.com', age: 23},
        {id: 6, firstName: 'Belachew',lastName: 'Dagachew', username: '@aman', email: 'new@gmail.com', age: 23},
        {id: 7, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
        {id: 8, firstName: 'last',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
    ];


    const courses = [
        {id: 1, name: 'Fundamentals of Programming'},
        {id: 2, name: 'Object Oriented Programming'},
        {id: 3, name: 'Computer Graphics'},
        {id: 4, name: 'Software Design and Development'},
    ]
    

  const classes = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'F'},
    ]

    return {students, courses, classes};
  }

   // Overrides the genId method to ensure that a students always has an id.
  genId<T extends Student | Course | Class>(myTable: T[]): number{
    return myTable.length > 0 ? Math.max(...myTable.map(student => student.id)) + 1 : 1;
  }

// Overrides the genId method to ensure that a students always has an id.
  // genId(students: Student[]): number{
  //   return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  // }

}
