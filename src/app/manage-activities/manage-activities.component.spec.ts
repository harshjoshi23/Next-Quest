import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageActivitiesComponent } from './manage-activities.component';

describe('ManageActivitiesComponent', () => {
  let component: ManageActivitiesComponent;
  let fixture: ComponentFixture<ManageActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
