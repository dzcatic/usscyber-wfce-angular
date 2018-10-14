import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGuideComponent } from './map-guide.component';

describe('MapGuideComponent', () => {
  let component: MapGuideComponent;
  let fixture: ComponentFixture<MapGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
