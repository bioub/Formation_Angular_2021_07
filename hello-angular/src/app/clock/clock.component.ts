import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  now = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date();
      // detectChanges() auto (car le premier param de setInterval est callback asynchrone)
    }, 1000);
  }

}
