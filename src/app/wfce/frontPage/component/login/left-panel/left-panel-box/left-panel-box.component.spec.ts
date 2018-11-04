import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelBoxComponent } from './left-panel-box.component';

describe('LeftPanelBoxComponent', () => {
  let component: LeftPanelBoxComponent;
  let fixture: ComponentFixture<LeftPanelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
