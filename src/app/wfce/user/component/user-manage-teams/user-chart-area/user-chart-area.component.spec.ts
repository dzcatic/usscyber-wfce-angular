import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChartAreaComponent } from './user-chart-area.component';

describe('UserChartAreaComponent', () => {
  let component: UserChartAreaComponent;
  let fixture: ComponentFixture<UserChartAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChartAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
