import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableDataComponent } from './user-table-data.component';

describe('UserTableDataComponent', () => {
  let component: UserTableDataComponent;
  let fixture: ComponentFixture<UserTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
