import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  type: "Erro" | "Sucesso!" = "Erro";

  @Input()
  message: String = ""

  @Output()
  closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hideModal() {
    this.closeEvent.emit(false);
  }

  getClassByType(){
    return this.type == "Sucesso!" ? "modal-success-header" : "modal-error-header"
  }
}
