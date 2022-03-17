import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Test } from 'src/app/interfaces/test';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  test?: Test;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTest();
  }

  getTest(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.testService.getTest(id).subscribe(test => this.test = test);
  }

  save(): void{
    if(this.test){
      this.testService.updateTest(this.test)
          .subscribe(() => this.goBack());
    }
  }

  goBack(): void{
    this.location.back();
  }
}
