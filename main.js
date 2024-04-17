//Canvas

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext('2d');
cnv.width = 1200;
cnv.height = 800;

//Red Base

ctx.fillStyle = "rgb(238, 37, 54)";
ctx.fillRect(0, 0, 1200, 400);

//White Circle

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(300, 200, 150, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgb(238, 37, 54)";
ctx.beginPath();
ctx.arc(360, 200, 150, 0, 2 * Math.PI);
ctx.fill();

function drawStar(ctx, x, y, radius, numPoints, innerRadius) {
    const rotation = -Math.PI/2; // Rotate 90 degrees to make the star upright
    ctx.beginPath();
    for (let i = 0; i < numPoints * 2; i++) {
        const angle = rotation + (Math.PI / numPoints) * i;
        const r = (i % 2 === 0) ? radius : innerRadius;
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = 'white'; // Change color as needed
    ctx.fill();
}

function drawHex(ctx, x, y, radius, numPoints, innerRadius) {
    const rotation = -Math.PI/2; // Rotate 90 degrees to make the star upright
    ctx.beginPath();
    for (let i = 0; i < numPoints * 2; i++) {
        const angle = rotation + (Math.PI / numPoints) * i;
        const r = (i % 2 === 0) ? radius : innerRadius;
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = 'black'; // Change color as needed
    ctx.fill();
}

drawStar(ctx, 320, 180, 50, 5, 20);
drawStar(ctx, 500, 180, 50, 5, 20);
drawStar(ctx, 410, 115, 50, 5, 20);
drawStar(ctx, 355, 285, 50, 5, 20);
drawStar(ctx, 465, 285, 50, 5, 20);

// drawHex(ctx, 400, 200, 75, 5, 60);


