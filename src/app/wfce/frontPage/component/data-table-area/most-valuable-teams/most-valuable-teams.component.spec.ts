import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostValuableTeamsComponent } from './most-valuable-teams.component';

describe('MostValuableTeamsComponent', () => {
  let component: MostValuableTeamsComponent;
  let fixture: ComponentFixture<MostValuableTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostValuableTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostValuableTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
