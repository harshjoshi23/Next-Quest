import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../services/apiservice';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  @Input() activity: Activity;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClickBookNow() {
    this.router.navigate(["/booking", { id: this.activity.id, name: this.activity.name }]);
  }
}
