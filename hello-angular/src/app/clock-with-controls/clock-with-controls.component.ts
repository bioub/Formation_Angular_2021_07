import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-with-controls',
  templateUrl: './clock-with-controls.component.html',
  styleUrls: ['./clock-with-controls.component.css']
})
export class ClockWithControlsComponent implements OnInit {

  format = 'HH:mm:ss';
  delay = 1000;
  showClock = true;

  constructor() { }

  ngOnInit(): void {
  }

  updateDelay(delay: string) {
    this.delay = Number(delay);
  }
}
