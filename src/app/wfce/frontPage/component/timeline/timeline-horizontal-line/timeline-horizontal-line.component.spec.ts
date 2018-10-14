import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHorizontalLineComponent } from './timeline-horizontal-line.component';

describe('TimelineHorizontalLineComponent', () => {
  let component: TimelineHorizontalLineComponent;
  let fixture: ComponentFixture<TimelineHorizontalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineHorizontalLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineHorizontalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
