import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardBoxTitleComponent } from './user-dashboard-box-title.component';

describe('UserDashboardBoxTitleComponent', () => {
  let component: UserDashboardBoxTitleComponent;
  let fixture: ComponentFixture<UserDashboardBoxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardBoxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
