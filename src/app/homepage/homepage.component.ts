import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { apiClient, Activity } from '../services/apiservice';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public filteredActivities: Array<Activity>;
  slides = [
    { image: 'https://teledoc.ams3.digitaloceanspaces.com/bagpack.jpg' },
    { image: 'https://teledoc.ams3.digitaloceanspaces.com/chandrishilla.jpg' },
    { image: 'https://teledoc.ams3.digitaloceanspaces.com/Copy%20of%20Kedar%202.jpg' },
    { image: 'https://teledoc.ams3.digitaloceanspaces.com/Hampta2.jpg' },
    { image: 'https://teledoc.ams3.digitaloceanspaces.com/kasol3.jpg' },
  ];


  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private apiService: apiClient
  ) { }
  ngOnInit() {
    this.apiService.get_activity(null).subscribe((x) => {
      this.filteredActivities = x;
      console.log(this.filteredActivities);
    });
  }
}
