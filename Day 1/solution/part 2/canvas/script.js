var can = document.getElementById("can");
var ctx = can.getContext("2d");
var width = 600;
var height = 500;
var initWidth = 0;
var initHeight = 0;

ctx.beginPath();


var drawInterval = setInterval(draw,100);


function draw(){

    if(initWidth < width && initHeight <height){
        ctx.moveTo(initWidth,initHeight);
        initWidth +=6;
        initHeight+=5;
        ctx.lineTo(initWidth,initHeight);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }else{
        alert("animation end");
        clearInterval(drawInterval);

    }
}



