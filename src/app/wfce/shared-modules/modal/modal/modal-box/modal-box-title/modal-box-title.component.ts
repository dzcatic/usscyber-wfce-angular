import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../modal.service';

@Component({
  selector: 'app-modal-box-title',
  templateUrl: './modal-box-title.component.html',
  styleUrls: ['./modal-box-title.component.scss']
})
export class ModalBoxTitleComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }
  
  close(){
    this.modalService.closeModal();
  }

}
