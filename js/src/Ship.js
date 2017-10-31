function Ship(ctx) {
  this.y = 540,
    this.x = 960,
    this.vx = 0,
    this.vy = 0,
    this.acelx = 0,
    this.acely = 0, // LA FUERZA (ACELERACIÓN) DE CONTRAPARTIDA POR EL USUARIO
    this.angle = Math.PI / 2;
  this.dAngle = 0,
    this.radius = 22,
    this.color = "white",
    this.fuel = 1000;
    this.dfuel = 0;
  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.angle - (Math.PI / 2), this.angle + (Math.PI / 2), true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.font = "30px Courier";
    ctx.fillStyle = "red";
    ctx.fillText("Fuel Left: " + Math.ceil(this.fuel),1500,100);
  };
};
Ship.prototype._acelx = function() {
  this.acelx = 0.25 * -(Math.cos(this.angle));
};

Ship.prototype._acely = function() {
  this.acely = 0.25 * (Math.sin(this.angle));
};

Ship.prototype._dAngleCounter = function() {
  this.dAngle = -(6) * (Math.PI / 180);
};

Ship.prototype._dAngleClock = function() {
  this.dAngle = (6) * (Math.PI / 180);
};

Ship.prototype._acelxR = function() {
  this.acelx = 0;
};

Ship.prototype._acelyR = function() {
  this.acely = 0;
};

Ship.prototype._dAngleCounterR = function() {
  this.dAngle = 0;
};

Ship.prototype._dAngleClockR = function() {
  this.dAngle = 0;
};

Ship.prototype._usingFuel = function() {
  if (this.fuel > 0) {
      this.dfuel = 0.1;
  } else {
    this.acelx = 0;
    this.acely = 0;
  };
};

Ship.prototype._notUsingFuel = function() {
  this.dfuel = 0;
  };
