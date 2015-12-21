background(89, 216, 255);

var drawFish = function(centerX, centerY) {
    var bodyLength = random(80,120);
    var bodyHeight = random(50,80);
    var bodyColor = color(random(0,255),random(0,255),random(0,255));

    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

mouseClicked = function() {
    drawFish(mouseX, mouseY);
};
