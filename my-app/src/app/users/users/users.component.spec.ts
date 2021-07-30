import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersComponent } from './users.component';

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let httpTestingController: HttpTestingController;

  beforeAll(() => {
    console.error = (msg) => {
      fail(msg);
    };
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ UsersComponent ],
  //     imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(waitForAsync(() => {
  //   fixture = TestBed.createComponent(UsersComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));

  // it('should create', () => {
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contains data from backend (simulated)', () => {
    httpTestingController
      .expectOne('https://jsonplaceholder.typicode.com/users')
      .flush([
        {
          id: 1,
          name: 'ABC',
        },
        {
          id: 2,
          name: 'DEF',
        },
      ]);

    fixture.detectChanges();
    expect(component).toBeTruthy();

    const hostEl: HTMLElement = fixture.nativeElement;
    expect(hostEl.querySelectorAll('.menu > a')?.length).toBe(3);

    httpTestingController.verify();
  });
});
