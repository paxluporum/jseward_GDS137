function Ball()
{
    // set up player starting point
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // set up player dimensions
    this.radius = 50;

    /// set up player color
    this.color = "rgba(255, 0, 0, 1)" 

    // set up player velocity
    this.vx = 0;
    this.vy = 0;

    this.draw = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y);

            context.beginPath(); //Begin path
            context.arc(0, 0, this.radius, 0, Math.PI * 2); //Draw Circle
            context.fill();
        context.restore();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}