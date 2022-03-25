import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { Student } from "../../interfaces/student";
import { StudentService } from "../../services/student.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ClassService } from "src/app/services/class.service";
import { CourseService } from "src/app/services/course.service";
import { StudClass } from "src/app/interfaces/class";
import { Course } from "src/app/interfaces/course";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "username",
    "email",
    "age",
    "sex",
    "class_id",
    "class_name",
    "course_1_name",
    "course_2_name",
    "action",
  ];
  // students: Student[] = [];
  dataSource = new MatTableDataSource<Student>();

  clasesList: StudClass[] = [];
  coursesList: Course[] = [];

  selectedClass: StudClass;

  coursesFormControl = new FormControl();

  addStudentToggler = false;
  optionalFieldsToggler = false;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private classService: ClassService,
    private courseService: CourseService
  ) {
    this.getStudnets();
    this.getClasses();
    this.getCourses();
    // this.dataSource = new MatTableDataSource(this.students);
    // this.dataSource.data = this.students;
  }

  ngOnInit() {
    this.getStudnets();
    this.getClasses();
    this.getCourses();
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

  getStudnets(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => (this.dataSource.data = students));
  }

  add(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    age: number,
    clas: StudClass,
    courses: Course[]
  ): void {
    firstName = firstName.trim();

    if (!firstName) {
      return;
    }
    this.studentService
      .addStudent({
        firstName,
        lastName,
        username,
        email,
        age,
        studClass: clas,
        courses,
      } as Student)
      .subscribe((student) => {
        this.dataSource.data = [student, ...this.dataSource.data];
      });
  }

  delete(student: Student): void {
    this.dataSource.data = this.dataSource.data.filter((h) => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

  // other services methods
  getClasses(): void {
    this.classService.getClasss().subscribe((clas) => (this.clasesList = clas));
  }

  getCourses(): void {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.coursesList = courses));
  }
}
