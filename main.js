var rightwristx = 0
var leftwristx = 0
var nosey = 0
var nosex = 0
var difference = 0
function setup(){
   video = createCapture(VIDEO)
   video.position(300,300)
   canvas = createCanvas(580,580)
   canvas.position(1200,300)
   classifier = ml5.poseNet(video, modelLoaded)
classifier.on('pose',gotPoses)

}
function modelLoaded() {
    console.log("model is loaded")
}

function gotPoses(results) {
if (results.length>0) {
    

    console.log(results)
nosex =results[0].pose.nose.x 
nosey =results[0].pose.nose.y
leftwristx =results[0].pose.leftWrist.x 
rightwristx =results[0].pose.rightWrist.x 
difference= floor(leftwristx - rightwristx)
}
}
function draw(){
    background("pink")
    rect(nosex,nosey,difference,difference)
    document.getElementById("pixels").innerHTML = difference
}
