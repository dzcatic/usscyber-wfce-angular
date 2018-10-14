import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTestimonialsComponent } from './timeline-testimonials.component';

describe('TimelineTestimonialsComponent', () => {
  let component: TimelineTestimonialsComponent;
  let fixture: ComponentFixture<TimelineTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
