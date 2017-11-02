
function Board(){
this.gravity = 0.098;
this.ctx = document.getElementById('canvas').getContext('2d');
this.width = 1920;
this.height = 1080;
};


Board.prototype.updateShips = function (ship, landing){
  this.ctx.clearRect(0, 0, this.width, this.height);
  ship.update();
  ship.draw(this.ctx);
  this.hitBottom(ship);
  //console.log(landing);
  landing.hitTop(ship);
  //console.log(ship.accel, ship.speedX, ship.speedY, ship.x, ship.y, "Angulo", Math.round(ship.angle * 180 / Math.PI));
  // console.log("Angle: " + Math.round(ship.angle*(180/Math.PI)));
  landing.draw(this.ctx);
};

Board.prototype.hitBottom = function (ship){
  var land = this.height - ship.radius;
  if (ship.y > land && ship.speedY > -1.8 ) {
    ship.y = land;
    clearInterval(intervalId);
    alert("Mission Accomplished!!!!!  "+ship.fuel*2+" Points");
    clearInterval();
  } else if (ship.y > land && ship.speedY < -1.8) {
    ship.y = land;
    clearInterval(intervalId);
    alert("Game Over");
  };
};
