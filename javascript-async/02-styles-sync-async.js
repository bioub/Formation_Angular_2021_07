const fs = require('fs');

// sync (tant que le fichier n'a pas été lu, le thread est bloqué)
const buffer = fs.readFileSync('package.json');
console.log(buffer.toString('utf-8'));

// pile d'appels
// ^
// |
// |
// |readFileSync XXXXXXXXXXXXXXXX THREAD BLOQUE XXXXXXXXXXXXXXXXX toString - log
// +-----------------------------------------------------------------------------> temps
//

// async
fs.readFile('package.json', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});

// pile d'appels
// ^
// |
// |
// |readFile ..⟳..idle......                                     toString - log
// +-----------------------------------------------------------------------------> temps
//

