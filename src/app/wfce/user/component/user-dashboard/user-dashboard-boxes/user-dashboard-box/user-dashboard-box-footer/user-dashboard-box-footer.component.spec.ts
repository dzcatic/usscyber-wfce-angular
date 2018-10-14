import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardBoxFooterComponent } from './user-dashboard-box-footer.component';

describe('UserDashboardBoxFooterComponent', () => {
  let component: UserDashboardBoxFooterComponent;
  let fixture: ComponentFixture<UserDashboardBoxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardBoxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardBoxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
