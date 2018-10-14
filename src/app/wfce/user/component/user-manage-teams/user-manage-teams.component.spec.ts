import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageTeamsComponent } from './user-manage-teams.component';

describe('UserManageTeamsComponent', () => {
  let component: UserManageTeamsComponent;
  let fixture: ComponentFixture<UserManageTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
