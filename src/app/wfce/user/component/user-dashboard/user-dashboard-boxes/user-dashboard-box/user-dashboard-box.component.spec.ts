import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardBoxComponent } from './user-dashboard-box.component';

describe('UserDashboardBoxComponent', () => {
  let component: UserDashboardBoxComponent;
  let fixture: ComponentFixture<UserDashboardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
