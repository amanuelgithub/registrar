import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { Course } from '../../interfaces/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  // courses: Course[] = [];
  dataSource = new MatTableDataSource<Course>();

  addCourseToggler = false;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(private courseService: CourseService, private messageService: MessageService) {
    this.getCourses();
   }

  ngOnInit() {
    this.getCourses();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCourses(): void{
    this.courseService.getCourses().subscribe(students => this.dataSource.data = students);
  }

  add(name: string): void{
    name = name.trim();
    if(!name) {return;};
    this.courseService.addCourse({name} as Course)
        .subscribe(course => {
          this.dataSource.data = [course, ...this.dataSource.data];
        });
  }

  delete(course: Course): void {
    this.dataSource.data = this.dataSource.data.filter(h => h !== course);
    this.courseService.deleteCourse(course.id).subscribe();
  }

}
