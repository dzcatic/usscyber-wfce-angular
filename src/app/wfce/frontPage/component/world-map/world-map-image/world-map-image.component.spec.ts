import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapImageComponent } from './world-map-image.component';

describe('WorldMapImageComponent', () => {
  let component: WorldMapImageComponent;
  let fixture: ComponentFixture<WorldMapImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldMapImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldMapImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
