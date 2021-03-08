import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitydetailComponent } from './activitydetail/activitydetail.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "detail",
    component: ActivitydetailComponent,
  },
  {
    path: "booking",
    component: BookingComponent,
  }, 
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "**",
    component: HomepageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }