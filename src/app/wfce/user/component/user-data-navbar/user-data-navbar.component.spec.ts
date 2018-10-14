import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataNavbarComponent } from './user-data-navbar.component';

describe('UserDataNavbarComponent', () => {
  let component: UserDataNavbarComponent;
  let fixture: ComponentFixture<UserDataNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
