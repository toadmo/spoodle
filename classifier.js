
let clearButton;
let canvas;
let classifier;
let strokeSize;
let eraser = false;

function setup() {

    // Create the canvas to draw on
    canvas = createCanvas(560, 560);
    // Classify the drawing every brush stroke
    canvas.mouseReleased(classify);

    // Create a button to clear the canvas
    clearButton = createButton('Clear Drawing');
    clearButton.mousePressed(clearCanvas);

    // Create a button to toggle erase
    eraseButton = createButton('Erase');
    eraseButton.mousePressed(changeToErase);

    // Create a button to toggle draw
    drawButton = createButton('Draw');
    drawButton.mousePressed(changeToDraw);

    // Create a button to submit the drawing for evaluation
    submitButton = createButton('Submit');
    submitButton.mousePressed(classify);

    // Set canvas white
    background(255);

    // Load classifier
    classifier = ml5.imageClassifier('DoodleNet', modelLoaded);
}

// Classifier load confirmation
function modelLoaded() {
    console.log("Model successfully loaded!");
}

// Classification function run on the drawing
function classify() {
    classifier.classify(canvas, results);
    console.log("Classification complete!");
}

// Print classification results
function results(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}

// Clear the canvas
function clearCanvas() {
    background(255);
}

// Draw on canvas or erase
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

// Toggle erase
function changeToErase() {
    eraser = true;
}

// Toggle draw
function changeToDraw() {
    eraser = false;
}