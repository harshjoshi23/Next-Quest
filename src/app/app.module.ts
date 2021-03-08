//------------------- ANGULAR IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//------------------- MATERIAL IMPORTS 
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

// ----------------- 3RD PARTY IMPORTS

import { MatCarouselModule } from '@ngmodule/material-carousel';

//------------------ AUTH IMPORTS 
import Amplify from "aws-amplify";
import { Auth } from '@aws-amplify/auth';
import { authconfig, environment } from 'src/environments/environment';

//------------------ APP IMPORTS 
import { HttpInterceptorProviders } from './interceptors/interceptor-provider';
import { ActivityComponent } from './activity/activity.component';
import { ActivitydetailComponent } from './activitydetail/activitydetail.component';
import { BookingComponent } from './booking/booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { apiClient, API_BASE_URL } from "./services/apiservice";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageActivitiesComponent } from './manage-activities/manage-activities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooknowComponent } from './booknow/booknow.component';

Auth.configure(authconfig);
Amplify.configure(authconfig);
export function getBaseUrl(): string {
  return environment.apiUrl;
}
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ActivityComponent,
    ActivitydetailComponent,
    BookingComponent,
    ManageActivitiesComponent,
    DashboardComponent,
    BooknowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,  
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule, 
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    MatStepperModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    NgbModule,

    ],
  providers: [
    HttpInterceptorProviders,
    {
      provide: API_BASE_URL,
      useFactory: getBaseUrl,
    },
    apiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 