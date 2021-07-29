const fs = require('fs');

// sync
try {
  const buffer = fs.readFileSync('package.json');
  fs.writeFileSync('package.json.copy', buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}

// async -> callback hell / pyramid of doom
fs.readFile('package.json', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('package.json.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY DONE');
      }
    });
  }
});

// pour éviter le callback hell
// des libs ont été créées : async.js
// des libs qui implémentente des concepts de Promise (q, bluebird), Defer ou Future
// Promise a été normé en ECMAScript 2015
// dans fs, un API basé sur Promise est apparu dans Node 12

fs.promises.readFile('package.json')
  .then((buffer) => fs.promises.writeFile('package.json.copy', buffer))
  .then(() => console.log('COPY DONE'))
  .catch((err) => console.log(err))
