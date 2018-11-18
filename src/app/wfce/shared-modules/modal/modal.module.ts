import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalBoxComponent } from './modal/modal-box/modal-box.component';
import { ModalBoxTitleComponent } from './modal/modal-box/modal-box-title/modal-box-title.component';
import { ModalBoxFooterComponent } from './modal/modal-box/modal-box-footer/modal-box-footer.component';
import { ModalBoxDataComponent } from './modal/modal-box/modal-box-data/modal-box-data.component';
import { ModalService } from './modal.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    ModalBoxComponent,
    ModalBoxTitleComponent,
    ModalBoxFooterComponent,
    ModalBoxDataComponent
  ],
  exports: [
    ModalComponent,
    ModalBoxComponent,
    ModalBoxTitleComponent,
    ModalBoxFooterComponent,
    ModalBoxDataComponent
  ],
  providers: [
      ModalService
  ]
})
export class ModalModule { }
