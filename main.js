function setup() {
    video = createCapture(VIDEO);
    video.size(570, 540);
    canvas = createCanvas(570, 450);
    canvas.position(580, 90);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#808080');
    
}

function modelLoaded() {
console.log("Model loaded!");
}

function gotPoses(results) {
if(results.lenght > 0) {
console.log(results);    
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose X = " + noseX + " nose Y = " + noseY);

}
}
