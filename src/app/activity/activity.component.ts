import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../services/apiservice';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;
  tags: string[] = [];
  currentRate: number = 0; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.tags.push(this.activity.difficulty);
    this.tags.push(this.activity.state);
    this.tags.push(this.activity.tags);
    this.currentRate = +this.activity.stars;

  }
  onClickDetail() {
    this.router.navigate(["/detail", { id: this.activity.id, name: this.activity.name }]);
  }
  onClickBookNow() {
    this.router.navigate(["/booking", { id: this.activity.id, name: this.activity.name }]);
  }
  doStuff() {
    console.log("do st");
  }
}
