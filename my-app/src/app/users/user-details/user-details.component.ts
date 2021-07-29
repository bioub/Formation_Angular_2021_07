import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // callback hell + bug si je clique sur un user dont la réponse serait longue, puis un user dont la réponse serait rapide
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('id') as string).subscribe((user) => {
    //     this.user = user;
    //   });
    // });

    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) =>
          this.userService.getById(paramMap.get('id') as string)
        )
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}
