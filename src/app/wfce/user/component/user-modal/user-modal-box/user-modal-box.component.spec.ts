import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalBoxComponent } from './user-modal-box.component';

describe('UserModalBoxComponent', () => {
  let component: UserModalBoxComponent;
  let fixture: ComponentFixture<UserModalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
