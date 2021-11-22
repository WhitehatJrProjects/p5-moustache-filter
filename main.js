function preload() {
  clown_nose = loadImage("http://www.clker.com/cliparts/1/C/L/v/v/r/mustache-hi.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function take_snapshot() {
    save('my_filter_image.png');
}