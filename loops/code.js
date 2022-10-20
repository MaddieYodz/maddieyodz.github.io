var painter1 = document.getElementById("c1").getContext("2d");
var painter2 = document.getElementById("c2").getContext("2d");

function drawBackground(painter1) {
    painter1.fillstyle = "#000000";
    painter1.fillRect(0, 0, 400, 400);
}

function drawBackground(painter2) {
    painter2.fillstyle = "#000000";
    painter2.fillRect(0, 0, 400, 400);
}

drawBackground(painter1);
drawBackground(painter2);

painter1.fillStyle = "#FF0000";
var a = 0;
while (a < 13) {
    painter1.fillRect(370 - 30*a, 10 + 30*a, 20, 20);
    ++a;
}
var a = 0
while (a < 13) {
    painter1.fillRect(10 + 30*a, 10 + 30*a, 20, 20);
    ++a;
}

painter2.fillStyle = "#FF0000";
for(var b = 0; b < 13; ++b) {
    for (var a = 0; a < 13; ++a) {
    painter2.fillRect (10+30*a, 10+b*30, 20, 20);
    }
}