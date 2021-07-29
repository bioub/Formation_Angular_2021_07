const { interval } = require("rxjs");
const { map, filter, reduce, take } = require("rxjs/operators");

interval(1000)
  .pipe(
    filter((v) => v % 2 === 0),
    map((v) => v * 2),
    take(5),
    reduce((acc, v) => acc + v),
  )
.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("DONE"),
  });

