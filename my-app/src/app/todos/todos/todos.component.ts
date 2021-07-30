import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    // {
    //   id: 1,
    //   title: 'ABC',
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: 'DEF',
    //   completed: true,
    // }
  ]

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.loading = true;
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
      // this.loading = false;
    })
  }

  handleAdd(todo: Todo) {
    this.todos.unshift(todo);
  }

  handleDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
