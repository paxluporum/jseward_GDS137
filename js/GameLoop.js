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
    if (ball.x > canvas.width + ball.radius) // if player moves off screen 
    {
       //ball.x = -ball.width/2 //teleports player totally off the screen to the left // Turn this off before turning on bottom one
       ball.vx *= -1 // reverse velocity to simulate bounce off right border //READ THIS LINE DANNY!!
    }

    ball.draw(); // everything above this does not visually appear untul this function is called
}


