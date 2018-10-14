import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableRowMatchComponent } from './user-table-row-match.component';

describe('UserTableRowMatchComponent', () => {
  let component: UserTableRowMatchComponent;
  let fixture: ComponentFixture<UserTableRowMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableRowMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableRowMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
