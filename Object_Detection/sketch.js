let img;
let detector;

function preload() {
  img = loadImage("cat.jpeg");
  detector = ml5.objectDetector("cocossd");
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }

  for (let i = 0; i < results.length; i++) {
    let object = results[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
  console.log(results);
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0);
  console.log(detector);
  detector.detect(img, gotDetections);
}
