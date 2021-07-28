import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  open = false;

  @Input() items = ['A', 'B', 'C'];
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {
    console.log('constructor', this.items);
   }

  ngOnInit(): void {
    if (!this.items.length) {
      throw new Error('items must not be empty');
    }
    if (!this.selected) {
      this.selected = this.items[0];
    }
  }

  handleSelect(item: string) {
    this.selected = item;
    this.selectedChange.emit(item); // pour le parent
  }
}
