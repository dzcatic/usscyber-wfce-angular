import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalBoxTitleComponent } from './user-modal-box-title.component';

describe('UserModalBoxTitleComponent', () => {
  let component: UserModalBoxTitleComponent;
  let fixture: ComponentFixture<UserModalBoxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalBoxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
