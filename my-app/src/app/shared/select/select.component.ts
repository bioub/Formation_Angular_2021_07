import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  open = false;

  @Input() items = ['A', 'B', 'C'];
  @Input() selected = 'B';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(item: string) {
    this.selected = item;
    this.selectedChange.emit(item); // pour le parent
  }
}
