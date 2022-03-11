leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
canvas = createCanvas(600, 600);
canvas.center();
video = createCapture(VIDEO);
video.size(550, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function preload(){

}

function draw(){
background("808080");
textSize(difference);
fill(0, 255, 0);
text('Logan', 50, 400)
}

function modelLoaded(){
    console.log("PoseNet is ready to change font size!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX =  results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

