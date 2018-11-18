import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavbarDropdownComponent } from './user-navbar-dropdown.component';

describe('UserNavbarDropdownComponent', () => {
  let component: UserNavbarDropdownComponent;
  let fixture: ComponentFixture<UserNavbarDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavbarDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
