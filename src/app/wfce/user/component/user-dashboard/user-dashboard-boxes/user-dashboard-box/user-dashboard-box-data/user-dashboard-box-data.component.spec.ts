import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardBoxDataComponent } from './user-dashboard-box-data.component';

describe('UserDashboardBoxDataComponent', () => {
  let component: UserDashboardBoxDataComponent;
  let fixture: ComponentFixture<UserDashboardBoxDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardBoxDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardBoxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
