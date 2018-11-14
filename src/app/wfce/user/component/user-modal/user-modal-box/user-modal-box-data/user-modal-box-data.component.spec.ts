import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalBoxDataComponent } from './user-modal-box-data.component';

describe('UserModalBoxDataComponent', () => {
  let component: UserModalBoxDataComponent;
  let fixture: ComponentFixture<UserModalBoxDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalBoxDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalBoxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
