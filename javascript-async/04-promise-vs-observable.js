// function timeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // appelle () => console.log('1s')
//       resolve();
//     }, delay)
//   });
// }

// timeout(1000)
//   .then(() => console.log('1s'));

const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      // appelle () => console.log('1s')
      observer.next();
    }, delay)
  });
}

interval(1000)
  .subscribe(() => console.log('1s'));
