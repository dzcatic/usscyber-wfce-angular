import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableRowClubComponent } from './user-table-row-club.component';

describe('UserTableRowClubComponent', () => {
  let component: UserTableRowClubComponent;
  let fixture: ComponentFixture<UserTableRowClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableRowClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableRowClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
