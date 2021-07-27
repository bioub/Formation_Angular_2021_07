import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multistatebutton',
  templateUrl: './multistatebutton.component.html',
  styleUrls: ['./multistatebutton.component.css']
})
export class MultistatebuttonComponent implements OnInit {

  items = ['Yes', 'No', 'Maybe'];
  selected = 'Yes';

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const selectedIndex = this.items.indexOf(this.selected);
    const nextIndex = (selectedIndex + 1) % this.items.length;
    this.selected = this.items[nextIndex];
  }
}
