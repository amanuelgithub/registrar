import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AppComponent } from './components/app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ClassesComponent } from './components/classes/classes.component';
import { TestsComponent } from './components/tests/tests.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:id', component: CourseDetailComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classes/:id', component: ClassDetailComponent},
  {path: 'tests', component: TestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
