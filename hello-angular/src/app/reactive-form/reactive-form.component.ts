import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formGroup = new FormGroup({
    email: new FormControl('romain@wearedevs.fr', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('123456', [Validators.required, Validators.pattern(/\d+/)]),
  });

  constructor() { }

  ngOnInit(): void {
    // this.formGroup.
    this.formGroup.statusChanges.subscribe((status) => {
      console.log(status);

    })
    // this.formGroup.valueChanges.subscribe((user) => {
    //   console.log(user)
    // })
    // this.formGroup.get('email')?.valueChanges.subscribe((email) => {
    //   console.log(email)
    // })
  }

  handleSubmit(event: any) {
    console.log(event);

    // TODO send to server
    console.log(this.formGroup.value);
  }
}
