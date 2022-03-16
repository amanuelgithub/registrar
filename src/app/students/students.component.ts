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

}
