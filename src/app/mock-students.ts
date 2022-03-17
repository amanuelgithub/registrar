import { Student } from "./interfaces/student";

export const STUDENTS: Student[] = [
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
];