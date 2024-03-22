function setup(){
    video=createCapture(VIDEO);
    video.size(550, 600);
    video.position(50, 50);

    canvas=createCanvas(550, 400);
    canvas.position(700, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background('#FFFFFF');
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
    }
}