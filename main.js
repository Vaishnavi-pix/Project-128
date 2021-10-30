leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
music1="";
music2="";
function preload(){
music1=loadSound("music.mp3");
music2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function gotPoses(results){
if(results.length>0){
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
}
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    image(video,0,0,600,450);
}
function play(){
music1.play();
music1.setVolume(1);
music1.rate(1);
music2.setVolume(1);
music2.rate(1);
}