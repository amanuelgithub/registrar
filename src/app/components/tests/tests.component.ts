import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Test } from "src/app/interfaces/test";
import { TestService } from "src/app/services/test.service";

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["id", "num", "time", "action"];
  // courses: Test[] = [];
  dataSource = new MatTableDataSource<Test>();

  addTestToggler = false;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(
    private courseService: TestService,
    private messageService: MessageService
  ) {
    this.getTests();
  }

  ngOnInit() {
    this.getTests();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTests(): void {
    this.courseService
      .getTests()
      .subscribe((tests) => (this.dataSource.data = tests));
  }

  add(num: any, time: any): void {
    // time = time.trim();
    if (!time) {
      return;
    }

    time = String(time);

    this.courseService
      .addTest({ num, time: time } as Test)
      .subscribe((course) => {
        this.dataSource.data = [course, ...this.dataSource.data];
      });
  }

  delete(course: Test): void {
    this.dataSource.data = this.dataSource.data.filter((h) => h !== course);
    this.courseService.deleteTest(course.id).subscribe();
  }
}
