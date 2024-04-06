song1 = "";
song2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded(){
    console.log("model is loaded");
}

function draw(){
    image(video,0,0,600,300);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightwrist.x;
        leftwristy = results[0].pose.leftwrist.y;
        rightwristy = results[0].pose.rightwrist.y;
        console.log("the x coordinate of the left wrist is "+leftwristx+ " and the y coordinate of the left wrist is equal to "+ leftwristy);
        console.log("the x coordinate of the right wrist is equal to "+ rightwristx+ " and the y coordinate of the right wrist is equal to "+ rightwristy);
    }
}