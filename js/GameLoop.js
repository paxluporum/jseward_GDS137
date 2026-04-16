var canvas;
var context;
var ball;
var timer;
var interval = 1000 / 60; //60 fps
var counter = 0;
var player1;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

ball = new GameObject(200, canvas.height / 2, 100, 100, "#00ff00");
ball.vx = 4; //horizontal movement
ball.vy = 0; // vertical movement

player1 = new GameObject(100, canvas.height / 2, 25, 100, "#8400ff5e");

// npc1 = new GameObject(300, canvas.height / 2, 100, 100, "#00ffff");
// npc2 = new GameObject(600, canvas.height / 2, 100, 100, "#1900ff");
// npc3 = new GameObject(900, canvas.height / 2, 100, 100, "#ff00ff");

timer = setInterval(animate, interval);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.move();
    if (w) {
        player1.y -= 4
    }

    if (s) {
        player1.y += 4
    }

    if (player1.y - player1.height / 2 < 0) {
        player1.y = player1.height / 2;                    // top edge touches canvas top
    }
    if (player1.y + player1.height / 2 > canvas.height) {
        player1.y = canvas.height - player1.height / 2;    // bottom edge touches canvas bottom
    }

    ball.move();
    // BOUNCE OFF RIGHT WALL
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;   // push ball back to the edge
        ball.vx *= -1;                         // reverse horizontal direction
    }

    // // BOUNCE OFF LEFT WALL
    // if (ball.x - ball.radius < 0) {
    //     ball.x = ball.radius;                  // push ball back to the edge
    //     ball.vx *= -1;                         // reverse horizontal direction
    // }

    //BOUNCE OFF BOTTOM WALL
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;     // push back to edge
        ball.vy *= -1;                            // reverse vertical direction
    }

    // BOUNCE OFF TOP WALL
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;                     // push back to edge
        ball.vy *= -1;
    }

    //////////////////////// Losing Condition

    if (ball.x - ball.radius < 0) {
        ball.x = canvas.width / 2;
        ball.vx *= -1;
    }


    // ///////////////=============================

    // Player collision

// === BALL HITS PLAYER PADDLE (left side) ===
if (player1.collisionCheck(ball)) {
    // Push the ball just outside the paddle so it doesn't get stuck inside
    ball.x = player1.right() + ball.radius;

    // Reverse the horizontal velocity 
    ball.vx *= -1;
}
    // //NPC1 collision stuff
    // if (npc1.collisionCheck(ball)) {
    //     npc1.color = "#bbff00";
    // }
    // ////////////=====================
    // //NPC2 collision stuff
    // if (npc2.collisionCheck(ball)) {
    //     context.strokeRect(npc2.x - npc2.width / 2, npc2.y - npc2.height / 2, npc2.width, npc2.height);
    // }

    // //NPC3 collision
    // if (npc3.collisionCheck(ball)) {
    //     ball.x = ball.prevX
    // }
    // else 
    // {
    //     ball.prevX = ball.x;
    // }

    player1.drawRect();
    ball.drawCircle(); // everything above this does not visually appear untul this function is called
    // npc1.drawCircle();
    // npc2.drawCircle();
    // npc3.drawRect();

    // Display
    // context.fillStyle = "black";                  // text color
    // context.font = "bold 28px Arial";             // text style and size
    // context.fillText("Bounces: " + counter, 20, 50);  // text + position
}
// console.log("Current bounces:", counter);
