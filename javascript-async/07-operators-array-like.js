const { interval } = require("rxjs");
const { map, filter, reduce, take } = require("rxjs/operators");

function sumQuareOddInterval() {
  return interval(1000)
  .pipe(
    filter((v) => v % 2 === 0),
    map((v) => v * 2),
    take(5),
    reduce((acc, v) => acc + v),
  )
}

sumQuareOddInterval()
.subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log("DONE"),
  });

// ----0----1----2----3----4----5----6 ----7----8 ----9--...
// filter((v) => v % 2 === 0)
// ----0---- ----2---- ----4---- ----6 ---- ----8 ---- --...
// map((v) => v * 2)
// ----0---- ----4---- ----8---- ----12---- ----16---- --...
// take(5)
// ----0---- ----4---- ----8---- ----12---- ----(16|)
// reduce((acc, v) => acc + v)
// ---- ---- ---- ---- ---- ---- ----  ---- ----(40|)

