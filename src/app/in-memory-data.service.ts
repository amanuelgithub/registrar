import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Class } from './interfaces/class';
import { Course } from './interfaces/course';
import { Student } from './interfaces/student';
import { Test } from './interfaces/test';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    // const students = [
    //     {id: 1, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
    //     {id: 2, firstName: 'ahhda',lastName: 'fafa', username: '@amfafafan', email: 'fa@gmail.com', age: 23},
    //     {id: 3, firstName: 'hhalfaf',lastName: 'Girma', username: '@aman', email: 'sthg@gmail.com', age: 23},
    //     {id: 4, firstName: 'af',lastName: 'Girma', username: '@aman', email: 'legen@gmail.com', age: 23},
    //     {id: 5, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'rand@gmail.com', age: 23},
    //     {id: 6, firstName: 'Belachew',lastName: 'Dagachew', username: '@aman', email: 'new@gmail.com', age: 23},
    //     {id: 7, firstName: 'Amanuel',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
    //     {id: 8, firstName: 'last',lastName: 'Girma', username: '@aman', email: 'aman@gmail.com', age: 23},
    // ];

    const students = [
        {
            id: 1, 
            firstName: 'Amanuel',
            lastName: 'Girma', 
            username: '@aman', 
            email: 'aman@gmail.com',
            age: 23, 
            sex: 'Male',
            studClass: {id: 1, name: 'A'},
            courses: [
                {
                    id: 1, 
                    name: 'Fundamentals of Programming',
                    des: 'des', 
                    tests: [
                        {id: 1, num: 1, time: '12/12/2022', result: 10},
                        {id: 2, num: 2, time: '12/12/2022', result: 10},
                        {id: 3, num: 3, time: '1/12/2022', result: 10},
                    ]    
                },
                {
                    id: 2, 
                    name: 'Object Oriented Programming', 
                    des: 'des'
                },
            ],
            startingYear: '20/2/2022',
            endingYear: '20/2/2022',
        },
        {
            id: 2, 
            firstName: 'Amanuel',
            lastName: 'Girma', 
            username: '@aman', 
            email: 'aman@gmail.com',
            age: 23, 
            sex: 'Male',
            studClass: {id: 1, name: 'A'},
            courses: [
                {
                    id: 1, 
                    name: 'Fundamentals of Programming',
                    des: 'des', 
                    tests: [
                        {id: 1, num: 1, time: '12/12/2022', result: 10},
                        {id: 2, num: 2, time: '12/12/2022', result: 10},
                        {id: 3, num: 3, time: '1/12/2022', result: 10},
                    ]    
                },
                {
                    id: 2, 
                    name: 'Object Oriented Programming', 
                    des: 'des'
                },
            ],
            startingYear: '20/2/2022',
            endingYear: '20/2/2022',
        },
        {
            id: 3, 
            firstName: 'Amanuel',
            lastName: 'Girma', 
            username: '@aman', 
            email: 'aman@gmail.com',
            age: 23, 
            sex: 'Male',
            studClass: {id: 1, name: 'A'},
            courses: [
                {
                    id: 1, 
                    name: 'Fundamentals of Programming',
                    des: 'des', 
                    tests: [
                        {id: 1, num: 1, time: '12/12/2022', result: 10},
                        {id: 2, num: 2, time: '12/12/2022', result: 10},
                        {id: 3, num: 3, time: '1/12/2022', result: 10},
                    ]    
                },
                {
                    id: 2, 
                    name: 'Object Oriented Programming', 
                    des: 'des'
                },
            ],
            startingYear: '20/2/2022',
            endingYear: '20/2/2022',
        },
    ];


    const courses = [
        {id: 1, name: 'Fundamentals of Programming', des: 'des'},
        {id: 2, name: 'Object Oriented Programming', des: 'des'},
        {id: 3, name: 'Computer Graphics', des: 'des'},
        {id: 4, name: 'Software Design and Development', des: 'des'},
    ]
    

  const classes = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'F'},
    ]
  
  const tests = [
    {id: 1, num: 3, time: '01/12/2022'},
    {id: 2, num: 4,time: '01/12/2022'},
    {id: 3, num: 1,time: '01/12/2022'},
    {id: 4, num: 3,time: '02/03/2022'},
    {id: 5, num: 5,time: '05/05/2022'},
    {id: 6, num: 1,time: '11/11/2022'},
  ]


    return {students, courses, classes, tests};
  }

   // Overrides the genId method to ensure that a students always has an id.
  genId<T extends Student | Course | Class | Test>(myTable: T[]): number{
    return myTable.length > 0 ? Math.max(...myTable.map(table => table.id)) + 1 : 1;
  }

// Overrides the genId method to ensure that a students always has an id.
  // genId(students: Student[]): number{
  //   return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  // }

}
