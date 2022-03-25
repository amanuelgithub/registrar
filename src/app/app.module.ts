import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudentsComponent } from "./components/students/students.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { StudentSearchComponent } from "./components/student-search/student-search.component";

// angular material imports
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material";
import { MatNativeDateModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { CoursesComponent } from "./components/courses/courses.component";
import { ClassesComponent } from "./components/classes/classes.component";
import { TestsComponent } from "./components/tests/tests.component";
import { CourseDetailComponent } from "./components/course-detail/course-detail.component";
import { ClassDetailComponent } from "./components/class-detail/class-detail.component";
import { TestDetailComponent } from "./components/test-detail/test-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    StudentSearchComponent,
    CoursesComponent,
    ClassesComponent,
    TestsComponent,
    CourseDetailComponent,
    ClassDetailComponent,
    TestDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),

    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
