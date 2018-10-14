import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEndComponent } from './timeline-end.component';

describe('TimelineEndComponent', () => {
  let component: TimelineEndComponent;
  let fixture: ComponentFixture<TimelineEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
