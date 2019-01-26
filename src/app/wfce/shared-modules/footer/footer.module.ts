import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedTranslationModule } from '../pipes/translation.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    SharedTranslationModule
  ],
  declarations: [FooterComponent],
  exports: [
    FooterComponent,
  ],
})
export class FooterModule { }
