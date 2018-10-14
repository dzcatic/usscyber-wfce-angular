import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardBoxesComponent } from './user-dashboard-boxes.component';

describe('UserDashboardBoxesComponent', () => {
  let component: UserDashboardBoxesComponent;
  let fixture: ComponentFixture<UserDashboardBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
