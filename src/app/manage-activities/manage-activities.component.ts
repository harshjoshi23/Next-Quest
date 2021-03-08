import { Component, OnInit } from '@angular/core';
import { Activity, apiClient } from '../services/apiservice';

@Component({
  selector: 'app-manage-activities',
  templateUrl: './manage-activities.component.html',
  styleUrls: ['./manage-activities.component.css']
})
export class ManageActivitiesComponent implements OnInit {
  operator_activities: Activity[];

  constructor(private apiclient: apiClient) {

  }

  ngOnInit(): void {
    this.apiclient.get_activity_manager(null).subscribe(x => {
      console.log(x);
      this.operator_activities = x;
    });
  }

}
