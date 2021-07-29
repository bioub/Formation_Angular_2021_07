const { interval, timer, of, from, EMPTY, fromEvent } = require("rxjs");

// interval(1000)
//   .subscribe({
//     next: () => console.log('1s'),
//     error: (err) => console.log(err),
//     complete: () => console.log('DONE')
//   });

// timer(1000).subscribe({
//   next: () => console.log("1s"),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

// of(["A", "B", "C"]).subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

// from(["A", "B", "C"]).subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });

// EMPTY.subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("DONE"),
// });
