const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

///////////////////////////STARS BACKGROUND SECTION////////////////////////////////
let stars = [];
function initializeStars() {
  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
    });
  }
}

function createStar(star) {
  context.fillStyle = "#FFFAE4";
  context.fillRect(star.x, star.y, star.size, star.size);
}

function updateStars () {
  stars.forEach((star) => {
    star.y += .5;
    if (star.y >= canvas.height) {
      star.y = 0;
    }
    return star;
  });
}

function darwStarfield() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(createStar);
}

function backgroundLoop() {
  darwStarfield();
  updateStars();
  requestAnimationFrame(backgroundLoop);
}

initializeStars();
backgroundLoop();

////////////////////////////////////////////////////////////////////////////////

///////////////////////////HERO SHIP SECTION////////////////////////////////////
const heroShip = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  width: 70,
  height: 40,
  speed: 1.5
}

function createHeroShip () {
  context.fillStyle = '#39FF14';
  context.fillRect(heroShip.x, heroShip.y, heroShip.width, heroShip.height);
}


function gameLoop () {
  createHeroShip();
  requestAnimationFrame(gameLoop);
}
gameLoop();
