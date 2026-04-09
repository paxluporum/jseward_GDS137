var canvas;
var context;
var ball;
var timer;
var interval = 1000/60; //60 fps


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

ball = new Ball();
ball.vx = 2; //horizontal movement
ball.vy = 0; // vertical movement

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.move();
// BOUNCE OFF RIGHT WALL
    if (ball.x + ball.radius > canvas.width)
    {
        ball.x = canvas.width - ball.radius;   // push ball back to the edge
        ball.vx *= -1;                         // reverse horizontal direction
    }

    // BOUNCE OFF LEFT WALL
    if (ball.x - ball.radius < 0)
    {
        ball.x = ball.radius;                  // push ball back to the edge
        ball.vx *= -1;                         // reverse horizontal direction
    }

    ball.draw(); // everything above this does not visually appear untul this function is called
}


