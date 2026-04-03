var canvas;
var context;
var player;
var timer;
var interval = 1000/60; //60 fps


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.vx = 2; //horizontal movement
player.vy = 0; // vertical movement

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    if (player.x > canvas.width + player.width/2) // if player moves off screen 
    {
       player.x = -player.width/2 //teleports player totally off the screen to the left // Turn this off before turning on bottom one
       // player.vx *= -1 // reverse velocity to simulate bounce off right border //READ THIS LINE DANNY!!
    }

    player.draw(); // everything above this does not visually appear untul this function is called
}


