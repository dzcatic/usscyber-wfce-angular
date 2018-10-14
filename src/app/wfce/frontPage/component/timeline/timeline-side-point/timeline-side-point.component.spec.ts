import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSidePointComponent } from './timeline-side-point.component';

describe('TimelineSidePointComponent', () => {
  let component: TimelineSidePointComponent;
  let fixture: ComponentFixture<TimelineSidePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSidePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSidePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
