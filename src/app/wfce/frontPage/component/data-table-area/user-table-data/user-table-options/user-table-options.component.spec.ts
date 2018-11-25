import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableOptionsComponent } from './user-table-options.component';

describe('UserTableOptionsComponent', () => {
  let component: UserTableOptionsComponent;
  let fixture: ComponentFixture<UserTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
