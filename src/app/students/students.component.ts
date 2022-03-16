import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { STUDENTS } from '../mock-students';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // selectedStudent?: Student | undefined;
  students: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) { }

  ngOnInit() {
    this.getStudnets();
  }

  // onSelect(student: Student){
  //   this.selectedStudent = student;
  //   this.messageService.add(`Students componet: selected studnet id=${student.id}`);
  // }

  getStudnets(): void{
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  add(firstName: string, lastName: string, username: string, email: string, age: number): void{
    firstName = firstName.trim();
    if(!firstName) {return;};
    this.studentService.addStudent({firstName, lastName, username, email, age} as Student)
        .subscribe(student => {
          this.students.push(student);
        });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

}
