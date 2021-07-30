import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';
import { Observable, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  add = new Subject<User>(); // la classe parent de EventEmitter

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    // const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/users', {
    //   headers: {}
    // });
    // this.httpClient.request(req)
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getById(id: string): Observable<User> {
    const req$ = this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id)

    if (id === '3') {
      return req$.pipe(
        delay(3000),
      );
    }

    return req$;
  }

  create(user: User) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', user).pipe(
      tap((user) => this.add.next(user)),
    );
  }
}
