function LandingArea(a, b){
  this.x = Math.random() * (a-70);
  this.y = Math.random() * b;
  this.dx = Math.random() * (0.5 - -0.5) + -0.5;
  this.dy = Math.random() * (0.5 - -0.5) + -0.5;
  this.width = 140;
  this.height = 2;
};

LandingArea.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.font = "16px Courier";
  ctx.Style = "white";
  ctx.fillText("POINTS X2",this.x+30  ,this.y+18);
    ctx.fillStyle = "rgba (255, 127, 127, 0.5)";;
  ctx.rect(this.x,this.y,this.width,this.height);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
;
};

LandingArea.prototype.hitTop = function (ship){
  var land = this.y; //LIMITE DE CHOQUE DE LA BOLA
  this.x += this.dx;
  this.y += this.dy;
  if (ship.y > land && ship.y < land + this.height && (ship.x-ship.radius)>this.x && (ship.x+ship.radius)<this.x+this.width && ship.speedY >-1.8 && ship.angle > (75*(Math.PI/180) && ship.angle < (105*(Math.PI/180) ) )){
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Mission Accomplished!!!!!  "+ship.fuel*4+" Points");
    clearInterval();
  } else if (ship.y > land && ship.y < land + this.height && (ship.x-ship.radius)>this.x && (ship.x+ship.radius)<this.x+this.width && ship.speedY <-1.8 ) {
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Game Over");
  };
};

// LandingArea.prototype.update =function(){
// this.x =
// this.y =
// };
