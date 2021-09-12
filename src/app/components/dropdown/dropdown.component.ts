import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  isFocused: Boolean = false;
  isActive: Boolean = false;
  selectorWidth: any = '';

  /*
    Define o tema, temos atualmente apenas
    duas possibilidades: roxo ou branco
  */
  @Input()
  theme: 'white' | 'purple' = 'white';

  /*
    Define o texto que aparecerá
    como placeholder
  */
  @Input()
  defaultValue: string = '';

  /*
    Lista de valores a ser iterada
    e mostrada no dropdown
  */
  @Input()
  values: any[] = [];

  /*
    Define se o componente deve
    alternar entre branco e roxo
    enquanto sofre hover
  */
  @Input()
  shouldListenHover: Boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  type: "default" | "states" = "default";

  /*
    Emissor de dados selecionados
  */
  @Output()
  pickedItem = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.type=="states") {
    }
  }

  setIsActive() {
    /*
      Modifica o tamanho do dropdown
      para ter a mesma width do selector
    */
    if (!this.disabled) {
      const select = document.getElementById('select');
      const selectWidth = select?.offsetWidth;
      this.selectorWidth = selectWidth + 'px';
      this.isActive = !this.isActive;
    }
  }

  selectItem(item: string) {
    this.pickedItem.emit(item);
    this.defaultValue = item;
    this.isActive = false;
  }

  focused() {
    if (this.shouldListenHover && !this.disabled) {
      this.isFocused = true;
    }
  }

  removeFocused() {
    if (this.shouldListenHover) {
      this.isFocused = false;
    }
  }

  checkDropdownStyle() {
    if (this.theme == 'white') {
      if (this.isActive) {
        if (this.isFocused) {
          return 'dropdown-container-activated-hover';
        }
        return 'dropdown-container-activated';
      }
      if (this.isFocused) {
        return 'dropdown-container-white-hover';
      }
      return 'dropdown-container-white';
    } else {
      if (this.isActive) {
        return 'dropdown-container-activated-purple';
      }
      return 'dropdown-container-purple';
    }
  }
}
