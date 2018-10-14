import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableAreaComponent } from './data-table-area.component';

describe('DataTableAreaComponent', () => {
  let component: DataTableAreaComponent;
  let fixture: ComponentFixture<DataTableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
