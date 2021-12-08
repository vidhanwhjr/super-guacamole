noseX = 0;
noseY = 0;
LeftWristx = 0;
RightWristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("LODED blah blah balha abplahdb bdaijd dsapd fjbioadp");
}

function draw(){
    background('#969A76');
    document.getElementById("square_width_height").innerHTML = "The width and height of the square will be:  " + difference;
    fill("orange");
    stroke("black");
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0){
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;

     LeftWristx = results[0].pose.leftWrist.x;
     RightWristx = results[0].pose.rightWrist.x;

     difference = floor(LeftWristx - RightWristx);
    }
}