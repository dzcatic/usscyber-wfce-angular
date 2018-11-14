import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAutocompleteDropdownComponent } from './user-autocomplete-dropdown.component';

describe('UserAutocompleteDropdownComponent', () => {
  let component: UserAutocompleteDropdownComponent;
  let fixture: ComponentFixture<UserAutocompleteDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAutocompleteDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAutocompleteDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
