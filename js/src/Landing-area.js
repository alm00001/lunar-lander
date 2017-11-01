function LandingArea(){
  this.x = Math.random() * (1920-70);
  this.y = Math.random() * 1080;
  this.dx = Math.random() * (0.5 - -0.5) + -0.5;
  this.dy = Math.random() * (0.5 - -0.5) + -0.5;
  this.width = 140;
  this.height = 20;
};

LandingArea.prototype._draw = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.x,this.y,this.width,this.height);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
};

LandingArea.prototype._hitTop = function (ship){
  var land = this.y; //LIMITE DE CHOQUE DE LA BOLA
  if (ship.y > land && ship.y < land + this.height && (ship.x-ship.radius)>this.x && (ship.x+ship.radius)<this.x+this.width && ship.vy <= 3 && ship.angle > (75*(Math.PI/180) && ship.angle < (105*(Math.PI/180) ) )){
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Mission Accomplished!!!!!  "+ship.fuel*4+" Points");
    clearInterval();
  } else if (ship.y > land && ship.y < land + this.height && (ship.x-ship.radius)>this.x && (ship.x+ship.radius)<this.x+this.width && ship.vy > 3 ) {
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Game Over");
  };
};
