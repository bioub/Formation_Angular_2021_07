const { timer, forkJoin, race } = require("rxjs");
const { mapTo, mergeMap, map } = require("rxjs/operators");

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

// fakeAjax('/todos/1')
//   .subscribe((todo) => {
//     fakeAjax('/users/' + todo.userId).subscribe((user) => {
//       console.log(todo, user);
//     });
//   })

fakeAjax('/todos/1')
  .pipe(
    mergeMap((todo) => fakeAjax('/users/' + todo.userId).pipe(
      map((user) => ({todo, user}))
    ))
  )
  .subscribe((data) => {
    console.log(data);
  })
