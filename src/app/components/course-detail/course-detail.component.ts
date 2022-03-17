import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from 'src/app/interfaces/course';



@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourse(id).subscribe(course => this.course = course);
  }

  save(): void{
    if(this.course){
      this.courseService.updateCourse(this.course)
          .subscribe(() => this.goBack());
    }
  }

  goBack(): void{
    this.location.back();
  }

}
