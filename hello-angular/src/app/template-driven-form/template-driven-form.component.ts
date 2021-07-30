import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: any) {
    console.log(event);

    // TODO send to server
    console.log(this.user);
  }
}
