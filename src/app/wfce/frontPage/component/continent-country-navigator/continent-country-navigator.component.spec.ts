import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentCountryNavigatorComponent } from './continent-country-navigator.component';

describe('ContinentCountryNavigatorComponent', () => {
  let component: ContinentCountryNavigatorComponent;
  let fixture: ComponentFixture<ContinentCountryNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentCountryNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentCountryNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
