import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIndicatorComponent } from './navbar-indicator.component';

describe('NavbarIndicatorComponent', () => {
  let component: NavbarIndicatorComponent;
  let fixture: ComponentFixture<NavbarIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
