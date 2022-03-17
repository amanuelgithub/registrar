import { Course } from "./course";
import { TestResult } from "./test-result";

export interface Test{
    id: number,
    num: number,
    time: string,
    result?: number, // test_result's result
}