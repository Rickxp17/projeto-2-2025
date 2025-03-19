let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);

  if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}

function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#FF5722");
  fill("#03A9F4");
  circle(200, 200, 300); // rosto
  fill("white");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 235); // boca
  fill("#3F51B5");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
