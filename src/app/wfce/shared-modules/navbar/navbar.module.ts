import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { NavbarIndicatorComponent } from './navbar-indicator/navbar-indicator.component';
import { NavbarIndicatorService } from './navbar-indicator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    NavbarDropdownComponent,
    NavbarIndicatorComponent
  ],
  exports: [
    NavbarComponent,
    NavbarIndicatorComponent
  ],
  providers: [
    NavbarIndicatorService
  ]
})
export class NavbarModule { }
