import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageTeamsBoxesComponent } from './user-manage-teams-boxes.component';

describe('UserManageTeamsBoxesComponent', () => {
  let component: UserManageTeamsBoxesComponent;
  let fixture: ComponentFixture<UserManageTeamsBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageTeamsBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageTeamsBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
