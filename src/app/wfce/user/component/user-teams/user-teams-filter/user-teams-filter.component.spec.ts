import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeamsFilterComponent } from './user-teams-filter.component';

describe('UserTeamsFilterComponent', () => {
  let component: UserTeamsFilterComponent;
  let fixture: ComponentFixture<UserTeamsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTeamsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeamsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
