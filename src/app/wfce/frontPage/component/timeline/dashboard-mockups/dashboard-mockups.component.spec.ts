import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMockupsComponent } from './dashboard-mockups.component';

describe('DashboardMockupsComponent', () => {
  let component: DashboardMockupsComponent;
  let fixture: ComponentFixture<DashboardMockupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMockupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMockupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
