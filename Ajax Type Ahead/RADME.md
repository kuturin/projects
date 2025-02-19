# Ajax Type Ahead

## Overview
This project is an Ajax Type Ahead search functionality created using HTML, CSS, and JavaScript. It fetches data from a remote endpoint and provides suggestions as the user types in the search input. This project is part of the JavaScript30 challenge, a series of 30 projects in 30 days to improve JavaScript skills.

## Contents
- `index.html`: The main HTML file containing the structure and content of the search form.
- `style.css`: The CSS file for styling the search form and suggestions.
- `script.js`: The JavaScript file for adding interactivity and fetching data from the endpoint.

## HTML Structure
The HTML file contains a search form with an input field and a list for displaying suggestions.

## JavaScript Functionality
The JavaScript code fetches data from a remote endpoint and filters the results based on the user's input. It displays the matching results in the suggestions list.

### Functions
- `findMatches(wordToMatch, cities)`: Filters the cities based on the user's input.
- `numberWithCommas(x)`: Formats numbers with commas.
- `displayMatches()`: Displays the matching results in the suggestions list.

## Usage
To use this project, open the `index.html` file in a web browser. Type in the search input to see the suggestions based on the input.

## Example
Here is an example of the JavaScript code:
```javascript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  document.querySelector('.suggestions').innerHTML = html;
}

const searchInput = document.querySelector('.search');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);