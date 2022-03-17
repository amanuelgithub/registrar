import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username','email', 'age', 'action'];
  // students: Student[] = [];
  dataSource = new MatTableDataSource<Student>();

  addStudentToggler = false;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(private studentService: StudentService, private messageService: MessageService) {
    this.getStudnets();
    // this.dataSource = new MatTableDataSource(this.students);
    // this.dataSource.data = this.students;
   }

  ngOnInit() {
    this.getStudnets();
    // this.dataSource = new MatTableDataSource(this.students)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  getStudnets(): void{
    this.studentService.getStudents().subscribe(students => this.dataSource.data = students);
  }

  add(firstName: string, lastName: string, username: string, email: string, age: number): void{
    firstName = firstName.trim();
    if(!firstName) {return;};
    this.studentService.addStudent({firstName, lastName, username, email, age} as Student)
        .subscribe(student => {
          this.dataSource.data = [student, ...this.dataSource.data];
        });
  }

  delete(student: Student): void {
    this.dataSource.data = this.dataSource.data.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

}
