// script.js
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');
const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Default drawing settings
let drawing = false;
let currentColor = '#000000';
let currentSize = 5;

// Update drawing color
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
});

// Update drawing size
sizePicker.addEventListener('input', (e) => {
    currentSize = e.target.value;
});

// Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw on the canvas while moving the mouse
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
});

// Stop drawing when the mouse is released
canvas.addEventListener('mouseup', () => {
    drawing = false;
});

// Clear the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
