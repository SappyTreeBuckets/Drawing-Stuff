var mouseEvent="empty";
var lastposofx,lastposofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
widthofline=2;

canvas.addEventListener("mouseup",my_Mouseup);
function my_Mouseup(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mousedown",my_Mousedown);
function my_Mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",my_Mouseleave);
function my_Mouseleave(e){
mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e){
currentposofx=e.clientX-canvas.offsetLeft;
currentposofy=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lastposofx,lastposofy);
    ctx.lineTo(currentposofx,currentposofy);
    ctx.stroke();
    console.log("Last position of x ="+lastposofx+" , Last position of y ="+lastposofy);
    console.log("Current position of x ="+currentposofx+" , Current position of y ="+currentposofy);
}
lastposofx=currentposofx;
lastposofy=currentposofy;
}



