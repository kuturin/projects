# Must Know Dev Tools Tricks

## Overview
This project demonstrates various must-know tricks for using developer tools in modern web development. It includes examples of using `console` methods for logging, counting, grouping, and timing. This project is part of the JavaScript30 challenge, a series of 30 projects in 30 days to improve JavaScript skills.

## Contents
- `index.html`: The main HTML file containing the examples of developer tools tricks.

## HTML Structure
The HTML file contains a script that demonstrates various `console` methods to help developers debug and analyze their code more effectively.

## JavaScript Functionality
The JavaScript code includes examples of:
- Regular logging with `console.log()`
- Interpolated logging with template literals
- Styled logging
- Grouping logs with `console.group()` and `console.groupEnd()`
- Counting occurrences with `console.count()`
- Timing operations with `console.time()` and `console.timeEnd()`
- Displaying data in a table format with `console.table()`

## Usage
To use this project, open the `index.html` file in a web browser and open the developer tools console to see the output of the various `console` methods.

## Example
Here is an example of the JavaScript code:
```javascript
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');
console.log(`Hello I am ${'💩'}`);

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Net');
console.count('Net');
console.count('Net');
console.count('Wes');
console.count('Wes');
console.count('Net');
console.count('Net');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);