import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    NavbarDropdownComponent
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }
