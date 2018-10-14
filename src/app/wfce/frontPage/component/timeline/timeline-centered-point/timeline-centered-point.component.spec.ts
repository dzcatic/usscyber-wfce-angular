import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCenteredPointComponent } from './timeline-centered-point.component';

describe('TimelineCenteredPointComponent', () => {
  let component: TimelineCenteredPointComponent;
  let fixture: ComponentFixture<TimelineCenteredPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCenteredPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCenteredPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
