import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter<Todo>();
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.add.emit({
      id: Math.random(),
      title: this.text,
      completed: false,
    });
    this.text = '';
  }
}
