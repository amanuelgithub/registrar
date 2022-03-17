import { Class } from "./class";
import { Course } from "./course";

export interface Student {
    id: number, 
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    age: number,
    sex?: string,
    studClass?: Class, //interface
    courses?: Course[],
    startingYear?: string,
    endingYear?: string,
}