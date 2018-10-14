import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLeaguesNavigatorComponent } from './country-leagues-navigator.component';

describe('CountryLeaguesNavigatorComponent', () => {
  let component: CountryLeaguesNavigatorComponent;
  let fixture: ComponentFixture<CountryLeaguesNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLeaguesNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLeaguesNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
