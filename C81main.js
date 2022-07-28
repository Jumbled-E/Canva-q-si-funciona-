var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
color = "black";


ctx=canvas.getContext("2d");
ctx.lineWidth = 1;
/*
ctx.strokeStyle = color;
ctx.beginPath();
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke(); */

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
 /*   color = document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = "+mouse_x + "Y = "+ mouse_y);
    circle(mouse_x, mouse_y);*/
    mouseEvent = "mouseDown";
} 

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if( mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    }last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseLeave";
}
/*
hola
 q pro */