'use strict;'

const clock = require('clock');
const cow = require('./cow');

console.log(clock.systemClock.now());
console.log(cow.speak('moo'));
console.log(cow.text);
console.log("Hey guys look I didn't have to run npm start again");

