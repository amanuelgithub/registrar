import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents() : Observable <Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('HeroServices: fetched heroes.');
    return students;
  }

  getStudent(id: number) : Observable<Student>{
    const studnet = STUDENTS.find(s => s.id === id);
    this.messageService.add(`Student Service: fetched student id=${id}`);
    return of(studnet);
  }
}
