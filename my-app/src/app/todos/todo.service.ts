import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo.model';
import { omit } from 'lodash-es'

type TodoWithUserId = Todo & {userId?: string};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<TodoWithUserId[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((todos) => todos.map((t) => {
        // const copyWithoutUserId = {id: t.id, title: t.title, completed: t.completed};
        // return copyWithoutUserId;
        // delete t.userId;
        // return t;
        const copyWithoutUserId = omit(t, 'userId');
        return copyWithoutUserId;
      }))
    );
  }
}
