var canvas;
var context;
var ball;
var timer;
var interval = 1000/60; //60 fps
var counter = 0; 


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

ball = new GameObject(200,200,100,100, "#00ff00");
//ball.vx = 0; //horizontal movement
//ball.vy = 0; // vertical movement


npc1 = new GameObject(300,canvas.height/2, 100, 100, "#00ffff");
npc2 = new GameObject(600,canvas.height/2, 100, 100, "#1900ff");
npc3 = new GameObject(900,canvas.height/2, 100, 100, "#ff00ff");

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    if(d)
    {
        ball.x += 4
    }

    if(a)
    {
        ball.x -= 4
    }


    ball.move();
// BOUNCE OFF RIGHT WALL
    if (ball.x + ball.radius > canvas.width)
    {
        ball.x = canvas.width - ball.radius;   // push ball back to the edge
        ball.vx *= -1;                         // reverse horizontal direction
        counter++;
    }

    // BOUNCE OFF LEFT WALL
    if (ball.x - ball.radius < 0)
    {
        ball.x = ball.radius;                  // push ball back to the edge
        ball.vx *= -1;                         // reverse horizontal direction
        counter++;
    }

    //BOUNCE OFF BOTTOM WALL
   if (ball.y + ball.radius > canvas.height)     
    {
        ball.y = canvas.height - ball.radius;     // push back to edge
        ball.vy *= -1;                            // reverse vertical direction
        counter++;
    }

    // BOUNCE OFF TOP WALL
    if (ball.y - ball.radius < 0)                 
    {
        ball.y = ball.radius;                     // push back to edge
        ball.vy *= -1;
        counter++;
    }


    ball.drawCircle(); // everything above this does not visually appear untul this function is called
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();

    // Display
    context.fillStyle = "black";                  // text color
    context.font = "bold 28px Arial";             // text style and size
    context.fillText("Bounces: " + counter, 20, 50);  // text + position
}
console.log("Current bounces:", bounceCount);

