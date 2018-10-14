import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableTitleComponent } from './user-table-title.component';

describe('UserTableTitleComponent', () => {
  let component: UserTableTitleComponent;
  let fixture: ComponentFixture<UserTableTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
