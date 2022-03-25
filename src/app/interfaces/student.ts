import { StudClass } from "./class";
import { Course } from "./course";

export interface Student {
    id: number, 
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    age: number,
    sex?: string,
    studClass?: StudClass, //interface
    courses?: Course[],
    startingYear?: string,
    endingYear?: string,
}