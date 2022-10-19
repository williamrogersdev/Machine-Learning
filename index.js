let mobilenet;

let peng;

function modelReady() {
  console.log("Model is ready");
  mobilenet.predict(peng, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let con = results[0].confidece;
    fill(0);
    textSize(64);
    text(label, 10, 100);
    createP(label);
    createP(con);
  }
}

function imageReady() {
  image(peng, 0, 0, width, height);
}

function setup() {
  createCanvas(400, 400);
  peng = createImg("images/peng.jpg", imageReady);
  peng.hide();
  background(0);

  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
