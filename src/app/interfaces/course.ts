import { Test } from "./test";

export interface Course {
    id: number, 
    name: string,
    des?: string,
    tests?: Test[], //interfact
}