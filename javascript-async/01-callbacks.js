const names = ['Romain', 'Eric', 'Jean'];

// callback synchrone
names.forEach((name) => {
  console.log(name);
});

// pile d'appels
// ^
// |lg   lg   lg
// |=> - => - =>
// |forEach
// +---------------------------------------> temps
//  Rom  Eric Jean

// callback asynchrone
setTimeout(() => {
  console.log('1s');
}, 1000);

// pile d'appels
// ^
// |
// |
// |setTimeout ..⟳..idle..                      =>
// +---------------------------------------------1s-> temps

// file d'attente (999ms) : =>
// file d'attente (1s) :
