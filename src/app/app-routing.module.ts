import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'classes', component: ClassesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
