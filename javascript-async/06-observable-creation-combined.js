const { timer, forkJoin, race } = require("rxjs");
const { mapTo } = require("rxjs/operators");

const fakeData = {
  "/users": [
    {
      id: 1,
      name: "Romain",
    },
    {
      id: 2,
      name: "Jean",
    },
  ],
  "/todos": [
    {
      id: 1,
      title: "ABC",
      completed: true,
      userId: 2,
    },
  ],
  "/todos/1": {
    id: 1,
    title: "ABC",
    completed: true,
    userId: 2,
  },
  "/users/1": {
    id: 1,
    name: "Romain",
  },
  "/users/2": {
    id: 2,
    name: "Jean",
  },
};

function fakeAjax(url) {
  return timer(Math.random() * 1000).pipe(mapTo(fakeData[url]));
}

// fakeAjax("/todos").subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

// fakeAjax("/users").subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

// combine les observable, sur le dernier complete j'obtiens les résultats
// forkJoin([
//   fakeAjax("/todos"),
//   fakeAjax("/users")
// ]).subscribe({
//     next: ([todos, users]) => console.log(todos, users),
//     error: (err) => console.log(err),
//     complete: () => console.log("DONE"),
//   });

// race(fakeAjax("/users"), timer(200)).subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

