# Fun with HTML5 Canvas

## Overview
This project is an interactive drawing application created using HTML5 Canvas and JavaScript. It allows users to draw on the canvas with a changing hue effect. This project is part of the JavaScript30 challenge, a series of 30 projects in 30 days to improve JavaScript skills.

## Contents
- `index.html`: The main HTML file containing the structure and content of the canvas drawing application.
- `style.css`: The CSS file for styling the canvas (if applicable).
- `script.js`: The JavaScript file for adding interactivity to the canvas.

## HTML Structure
The HTML file contains a canvas element where users can draw. The canvas is set to the full width and height of the window.

## JavaScript Functionality
The JavaScript code adds interactivity to the canvas. Users can draw on the canvas with a changing hue effect. The line width and color change dynamically as the user draws.

### Functions
- `draw(e)`: Handles the drawing on the canvas. Changes the stroke color and width dynamically.

## Usage
To use this project, open the `index.html` file in a web browser. Click and drag on the canvas to draw with a changing hue effect.

## Example
Here is an example of the JavaScript code:
```javascript
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);