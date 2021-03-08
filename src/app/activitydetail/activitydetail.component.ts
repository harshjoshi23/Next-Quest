import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { createJSDocThisTag } from 'typescript';
import { Activity, Activity_detail, apiClient } from '../services/apiservice';
@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.component.html',
  styleUrls: ['./activitydetail.component.css']
})
export class ActivitydetailComponent implements OnInit {
  selected_trek: string;
  trek_detail: Observable<Activity_detail[]>;
  related_treks: Observable<Activity[]>;
  activity$: Observable<Activity>;
  constructor(
    private apiclient: apiClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const selected_trek_id = this.route.snapshot.paramMap.get('id');
    const selected_trek_name = this.route.snapshot.paramMap.get('name');
    this.trek_detail = this.apiclient.get_activity_details(null, selected_trek_id).pipe(map(items => items.sort(this.sortBySectionNumber)));
    this.related_treks = this.apiclient.get_activity(null);
    this.activity$ = this.apiclient.get_single_activity(null, +selected_trek_id);  
  }
  sortBySectionNumber(a: Activity_detail, b: Activity_detail) {
    if (a.section_number < b.section_number)
      return -1;
    if (a.section_number > b.section_number)
      return 1;
    return 0;
  }

  ngOnInit(): void {
  }

}