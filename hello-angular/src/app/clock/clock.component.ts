import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  // @Input() set delay(delay: number) {
  //   clearInterval(this.interval);
  //   this.interval = setInterval(() => {
  //     this.now = new Date();
  //     // detectChanges() auto (car le premier param de setInterval est callback asynchrone)
  //   }, delay);
  // }

  private interval: any;
  now = new Date();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   this.now = new Date();
    //   // detectChanges() auto (car le premier param de setInterval est callback asynchrone)
    // }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.delay?.previousValue !== changes.delay?.currentValue) {
      console.log('ngOnChanges', this.delay, this.format);
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.now = new Date();
        // detectChanges() auto (car le premier param de setInterval est callback asynchrone)
      }, this.delay);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}

// <app-clock>
// ->
// new ClockComponent(); // potentielle erreur
