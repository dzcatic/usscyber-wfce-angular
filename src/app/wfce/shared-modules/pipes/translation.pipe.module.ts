import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTranslationPipe } from './translation.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    SharedTranslationPipe],
  exports: [
    TranslateModule,
    SharedTranslationPipe,
  ],
})
export class SharedTranslationModule { }
