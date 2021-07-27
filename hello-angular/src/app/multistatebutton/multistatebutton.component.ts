import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multistatebutton',
  templateUrl: './multistatebutton.component.html',
  styleUrls: ['./multistatebutton.component.css']
})
export class MultistatebuttonComponent implements OnInit {

  items = ['Yes', 'No', 'Maybe']

  constructor() { }

  ngOnInit(): void {
  }

}
