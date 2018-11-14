import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalBoxFooterComponent } from './user-modal-box-footer.component';

describe('UserModalBoxFooterComponent', () => {
  let component: UserModalBoxFooterComponent;
  let fixture: ComponentFixture<UserModalBoxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalBoxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalBoxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
