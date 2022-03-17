import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Class } from 'src/app/interfaces/class';
import { ClassService } from 'src/app/services/class.service';



@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  clas?: Class;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getClass();
  }

  getClass(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.classService.getClass(id).subscribe(c => this.clas = c);
  }

  save(): void{
    if(this.clas){
      this.classService.updateClass(this.clas)
          .subscribe(() => this.goBack());
    }
  }

  goBack(): void{
    this.location.back();
  }

}
