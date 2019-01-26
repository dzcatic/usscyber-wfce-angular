import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageTranslationPipe } from './translation.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    FrontPageTranslationPipe],
  exports: [
    TranslateModule,
    FrontPageTranslationPipe,
  ],
})
export class FrontPageTranslationModule { }
