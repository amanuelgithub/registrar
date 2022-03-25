import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudClass } from '../../interfaces/class';
import { ClassService } from '../../services/class.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<StudClass>();

  addClassToggler = false;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(private classService: ClassService, private messageService: MessageService) {
    this.getClasss();
   }

  ngOnInit() {
    this.getClasss();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getClasss(): void{
    this.classService.getClasss().subscribe(students => this.dataSource.data = students);
  }

  add(name: string): void{
    name = name.trim();
    if(!name) {return;};
    this.classService.addClass({name} as StudClass)
        .subscribe(c => {
          this.dataSource.data = [c, ...this.dataSource.data];
        });
  }

  delete(c: StudClass): void {
    this.dataSource.data = this.dataSource.data.filter(h => h !== c);
    this.classService.deleteClass(c.id).subscribe();
  }

}
