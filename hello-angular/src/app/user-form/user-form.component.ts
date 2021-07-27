import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    firstName: 'Romain',
    lastName: 'Bohdanowicz',
  };

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(event: Event) {
    event.preventDefault();
    console.log(this.user);
    this.submitted = true;
  }
}
