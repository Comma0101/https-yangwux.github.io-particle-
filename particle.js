

    // Obtain a reference to the canvas element using its id.
    htmlCanvas = document.getElementById('c'),
    // Obtain a graphics context on the canvas element for drawing.
    ctx = htmlCanvas.getContext('2d');
ctx.strokeStyle = "rgb(255, 0,0)";
ctx.strokeText("Believe start", 100,60);

   // Start listening to resize events and draw canvas.
   initialize();

   function initialize() {
       // Register an event listener to call the resizeCanvas() function
       // each time the window is resized.
       window.addEventListener('resize', resizeCanvas, false);
       // Draw canvas border for the first time.
       resizeCanvas();
    }

    // Display custom canvas. In this case it's a blue, 5 pixel
    // border that resizes along with the browser wind
    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth;
        htmlCanvas.height = window.innerHeight;
                }

                //Lets create an array of particles
                var particles = [];
                var range= Math.floor((Math.random() * 500) + 50);
                for(var i = 0; i < range; i++)
                {
                  //This will add 50 particles to the array with random positions
                  particles.push(new create_particle());
                }

                function create_particle()
                {
                  //Random position on the canvas
                  this.x = Math.random()*htmlCanvas.width;
                  this.y = Math.random()*htmlCanvas.height;

                  //Lets add random velocity to each particle
                  this.vx = Math.random()*20-10;
                  this.vy = Math.random()*20-10;

                  var r = Math.random()*255>>0;
                  var g = Math.random()*255>>0;
                  var b = Math.random()*255>>0;
                  this.color = "rgba("+r+", "+g+", "+b+", 0.5)";


                }


var x = 100; var y = 100;

function draw(){

//Lets paint the canvas black
//But the BG paint shouldn't blend with the previous frame
ctx.globalCompositeOperation = "source-over";
//Lets reduce the opacity of the BG paint to give the final touch
ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
ctx.fillRect(0, 0, htmlCanvas.width, htmlCanvas.width);

ctx.globalCompositeOperation = "lighter";


    for(var t = 0; t < particles.length; t++)
    {
      var p = particles[t];


      ctx.beginPath();

      var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 50);
      gradient.addColorStop(0, "pink");
      gradient.addColorStop(0.4, "black");
      gradient.addColorStop(0.4, p.color);
      gradient.addColorStop(1, "white");


      ctx.fillStyle = gradient;


      ctx.arc(p.x, p.y, 40, Math.PI*2, false);
      ctx.fill();
        p.x+=p.vx;
        p.y+=p.vx;


        if(p.x < -range) p.x = htmlCanvas.width+range;
        if(p.y < -range) p.y = htmlCanvas.width+range;
        if(p.x > htmlCanvas.width+range) p.x = -range;
        if(p.y > htmlCanvas.width+range) p.y = -range;

}

}
setInterval(draw, 33);
