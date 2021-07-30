import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}
  // constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
    this.userService.add.subscribe((user) => {
      this.users.push(user);
    });
    // this.activatedRoute.data.subscribe((data) => {
    //   this.users = data.users;
    // });
  }
}
