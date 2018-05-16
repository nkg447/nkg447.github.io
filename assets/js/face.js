var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight-200;
canvas.width = window.innerWidth-50;
var ctx = canvas.getContext("2d");

var styleColor = '#B8DC38';
var lineWidth = 10;

var canvasOffset=10;

var effectiveWidth = canvas.width-canvasOffset;
var effectiveHeight = canvas.height-canvasOffset;

var centreX = effectiveWidth/2;
var centreY = effectiveHeight/2;
var faceRadius = Math.min(effectiveHeight,effectiveWidth)/2 - lineWidth;
var eyeRadius = faceRadius/5;
var pupilRadius = eyeRadius/2;

var mouseX = centreX;
var mouseY = centreY;

function drawPupil() {
    //leftEye
    var eyeX = centreX-faceRadius/2;
    var eyeY = centreY-faceRadius/2;

    var theta = Math.tanh((mouseY-eyeY)/(mouseX-eyeX));
    var pupilX,pupilY;
    drawEyePupil();

    //rightEye
    eyeX = centreX+faceRadius/2;
    eyeY = centreY-faceRadius/2;
    theta = Math.tanh((mouseY-eyeY)/(mouseX-eyeX));
    drawEyePupil();

    function drawEyePupil() {
        if(mouseX>eyeX){
            pupilX = eyeX+pupilRadius*Math.cos(theta);
            pupilY = eyeY+pupilRadius*Math.sin(theta);
        }
        else{
            pupilX = eyeX-pupilRadius*Math.cos(theta);
            pupilY = eyeY-pupilRadius*Math.sin(theta);
        }

        ctx.beginPath();
        ctx.arc(pupilX,pupilY,pupilRadius,0,Math.PI*2);
        ctx.strokeStyle = styleColor;
        ctx.lineWidth = lineWidth/2;
        ctx.stroke();
        ctx.closePath();
    }

}

function drawEyes() {
    //face eyes
    //left eye
    ctx.beginPath();
    ctx.arc(centreX-faceRadius/2,centreY-faceRadius/2,eyeRadius,0,Math.PI*2);
    ctx.strokeStyle = styleColor;
    ctx.lineWidth = lineWidth/2;
    ctx.stroke();
    ctx.closePath();

    //right eye
    ctx.beginPath();
    ctx.arc(centreX+faceRadius/2,centreY-faceRadius/2,eyeRadius,0,Math.PI*2);
    ctx.strokeStyle = styleColor;
    ctx.lineWidth = lineWidth/2;
    ctx.stroke();
    ctx.closePath();

    drawPupil();
}

function drawFace() {
    //face outline
    ctx.beginPath();
    ctx.arc(centreX,centreY,faceRadius,0,Math.PI*2);
    ctx.strokeStyle = styleColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();

    drawEyes();
}

function mouseMoveHandler(e) {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    drawFace();
}

drawFace();
document.addEventListener("mousemove",mouseMoveHandler,false);