import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCoinComponent } from './timeline-coin.component';

describe('TimelineCoinComponent', () => {
  let component: TimelineCoinComponent;
  let fixture: ComponentFixture<TimelineCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
