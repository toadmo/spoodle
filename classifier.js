
let clearButton;
let canvas;
let classifier;
let strokeSize;
let eraser = false;

function setup() {
    canvas = createCanvas(560, 560);

    clearButton = createButton('Clear Drawing');
    clearButton.mousePressed(clearCanvas);

    eraseButton = createButton('Erase');
    eraseButton.mousePressed(changeToErase);

    drawButton = createButton('Draw');
    drawButton.mousePressed(changeToDraw);

    submitButton = createButton('Submit');
    submitButton.mousePressed(classify);

    background(255);

    classifier = ml5.imageClassifier('DoodleNet', modelLoaded);
}

function modelLoaded() {
    console.log("Model successfully loaded!");
}

function classify() {
    classifier.classify(canvas, results);
    console.log("Classification complete!");
}

function results(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result)
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

        strokeWeight(20);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function changeToErase() {
    eraser = true;
}

function changeToDraw() {
    eraser = false;
}