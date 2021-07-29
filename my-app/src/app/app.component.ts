import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private title: Title) {}

  ngOnInit(): void {
    // this.router.navigate(['users'])
    // this.router.navigateByUrl('/users');

    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event) => {
        const activationEndEvent = event as ActivationEnd;
        const title = activationEndEvent.snapshot.data.title;
        if (title) {
          this.title.setTitle(title);
        }
      });
  }
}
