import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTranslationPipe } from './translation.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    UserTranslationPipe],
  exports: [
    TranslateModule,
    UserTranslationPipe,
  ],
})
export class UserTranslationModule { }
