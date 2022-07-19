//Snow

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
initObjects(800, 600);

//global variables
let xVals = [];
let yVals = [];
let rVals = [];
let speedVals = [];
for (i = 0; i < 50; i++) {
    xVals.push(Math.randomDec(0, cnv.width));
    yVals.push(Math.randomDec(0, cnv.width));
    rVals.push(Math.randomDec(1, 20));
    speedVals.push(Math.randomDec(1, 10));
}

requestAnimationFrame(loop);
function loop() {
    //Logic elements
    for (i = 0; i < xVals.length; i++) {
        yVals[i] += speedVals[i];
        if (yVals[i] - rVals[i] > cnv.height) {
            rVals[i] = Math.randomDec(1, 20);
            yVals[i] = 0 - rVals[i];
            xVals[i] = Math.randomDec(0, cnv.width);
            speedVals[i] = Math.randomDec(1, 10);
        }
    }
    //Drawing elements
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "white";
    for (i = 0; i < xVals.length; i++) {
        ctx.fillCircle(xVals[i], yVals[i], rVals[i]);
    }
    requestAnimationFrame(loop);
}
document.addEventListener("keydown", keydownhandler);
function keydownhandler(event) {
    if (event.code === "ArrowUp") {
        xVals.push(Math.randomDec(0, cnv.width));
        yVals.push(Math.randomDec(0, cnv.width));
        rVals.push(Math.randomDec(1, 20));
        speedVals.push(Math.randomDec(1, 10));
    } else if (event.code === "ArrowDown") {
        xVals.pop();
        yVals.pop();
        rVals.pop();
        speedVals.pop();
    } else if (event.code === "ArrowRight") {
        for (i = 0; i < 10; i++) {
            xVals.push(Math.randomDec(0, cnv.width));
            yVals.push(Math.randomDec(0, cnv.width));
            rVals.push(Math.randomDec(1, 20));
            speedVals.push(Math.randomDec(1, 10));
        }
    } else if (event.code === "ArrowLeft") {
        for (i = 0; i < 10; i++) {
            xVals.pop();
            yVals.pop();
            rVals.pop();
            speedVals.pop();
        }
    }
}