import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStartComponent } from './timeline-start.component';

describe('TimelineStartComponent', () => {
  let component: TimelineStartComponent;
  let fixture: ComponentFixture<TimelineStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
