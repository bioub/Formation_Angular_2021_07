import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multistatebutton',
  templateUrl: './multistatebutton.component.html',
  styleUrls: ['./multistatebutton.component.css']
})
export class MultistatebuttonComponent implements OnInit {

  @Input() items = ['Yes', 'No', 'Maybe'];
  @Input() selected = 'Yes';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const selectedIndex = this.items.indexOf(this.selected);
    const nextIndex = (selectedIndex + 1) % this.items.length;
    this.selected = this.items[nextIndex];
    this.selectedChange.emit(this.selected);
  }
}
