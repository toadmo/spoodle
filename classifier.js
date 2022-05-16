
let clearButton;
let canvas;
let classifier;
let strokeSize;
let eraser = false;

function setup() {
    canvas = createCanvas(400, 400);

    clearButton = createButton('Clear Drawing');
    clearButton.mousePressed(clearCanvas);

    eraseButton = createButton('Erase');
    eraseButton.mousePressed(changeToErase);

    drawButton = createButton('Draw');
    drawButton.mousePressed(changeToDraw);

    background(255);
}

function clearCanvas() {
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        if (eraser) {
            stroke(color(255, 255, 255));
        }
        else {
            stroke(color(0, 0, 0));
        }

        strokeWeight(8);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function changeToErase() {
    eraser = true;
}

function changeToDraw() {
    eraser = false;
}