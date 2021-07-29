import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    // const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/users', {
    //   headers: {}
    // });
    // this.httpClient.request(req)
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
