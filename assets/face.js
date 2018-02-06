var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var height = c.height-300;

var e1cx=c.width/2-50,e1cy=height/2;
var e2cx=c.width/2+50,e2cy=height/2;
var er=30;
var font="Lato"

ctx.lineWidth=10;
ctx.strokeStyle = '#B8DC38';


function mouse_moved(e){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    var mp = getMousePos(e,c);
    var x = mp.x,y = mp.y;
    
    drawEye(e1cx,e1cy,x,y);
    drawEye(e2cx,e2cy,x,y);
    ctx.fillStyle = '#B8DC38';
    ctx.font = "300px "+font;
    ctx.fillText("<",c.width/2-300,height/2+150);
    ctx.fillText(">",c.width/2+130,height/2+150);
    ctx.font = "70px "+font;
    ctx.fillText("V",c.width/2-25,height/2+100);
    ctx.font = "100px "+font;
    ctx.fillText("_",c.width/2-25,height/2+100);
    
    ctx.beginPath();
    ctx.arc(c.width/2, height/2+50, 120, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e1cx, e1cy, er, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e2cx, e2cy, er, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "50px Indie Flower";
    ctx.fillText("Developer - Geek - Programming Enthusiast",c.width/8,2*height);

    
}

function drawEye(ecx,ecy,x,y){
    
    if(x==0 && y==0){
        ctx.beginPath();
        ctx.arc(ecx, ecy, er/3, 0, 2 * Math.PI);
        ctx.stroke();
        return;
    }
    
    var theta = calTheta(ecx,ecy,x,y);
    var Xm = 1, Ym = 1;
    if ((y < ecy && x > ecx) || (y > ecy && x > ecx)) {
        Xm = Ym = -1;
    }
    if(ecy==y && ecx<x){
        Xm=-1;
        Ym=0;
    }
    var px = getPointWRTx(ecx,theta,er/2,Xm,Ym);
    var py = getPointWRTy(ecy,theta,er/2,Xm,Ym);
    
    //console.log(px,py,x,y,theta);
    
    ctx.beginPath();
    ctx.arc(px, py, er/3, 0, 2 * Math.PI);
    ctx.stroke();
}

function calTheta(cx,cy,x,y){
    var slope = (cy-y)/(cx-x);
    return Math.atan(slope);
}

function getPointWRTx(px,theta,d,Xm,Ym){
    return px-Xm*d*Math.cos(theta);
}

function getPointWRTy(py,theta,d,Xm,Ym){
    return py-Ym*d*Math.sin(theta);
}

const getMousePos = (evt, canvas) => {
  const rect = canvas.getBoundingClientRect();
  return {
    y: evt.clientY - rect.top,
    x: evt.clientX - rect.left
}
}