const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let stars = [];// container to store star objects

//Initializing stars for background
function initializeStars () {
  //Creating stars with random positions and sizes
  for(let i = 0; i < 100; i++) { 
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
    });
  }
}

// Drawing stars on the canvas
function drawStar(star) {
  context.fillStyle = '#fff';
  // Draw a filled rectangle star on the canvas based on the star's position and size
  context.fillRect(star.x, star.y, star.size, star.size);
}

//Updating star position to create motion effect
function updateStars () {
  //Map over stars array and update positions
  stars = stars.map(star => {
    star.y += .5; //adjusting speed of motion
    if (star.y >= canvas.height) { //resetting star position when off screen
      star.y = 0;
    }
    return star;
  });
}

//Drawing starfield
function drawStarfield () {
  // Clear the entire canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Call drawStar function for each star in array
  stars.forEach(drawStar);
}

// Game loop
function gameLoop() {
  updateStars();//Update star position
  drawStarfield();//Draw star field on canvas
  requestAnimationFrame(gameLoop);//Rrequest next animation frame
}

//Initialize stars
initializeStars();
//Starts the loop
gameLoop()