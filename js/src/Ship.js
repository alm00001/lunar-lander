function Ship(x, y) {
    this.x = x,
    this.y = y,
    this.vx = 0,
    this.vy = 0,
    this.acelx = 0,
    this.acely = 0, // LA FUERZA (ACELERACIÓN) DE CONTRAPARTIDA POR EL USUARIO
    this.angle = Math.PI / 2;
    this.dAngle = 0,
    this.fuel = 1000,
    this.dfuel = 0,
    this.radius = 22,
    this.color = "white";
};

Ship.prototype._draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, this.angle - (Math.PI / 2), this.angle + (Math.PI / 2), true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.font = "30px Courier";
  ctx.fillText("Fuel: " + this.fuel, 1500, 300);
};

Ship.prototype._acelx = function() {
  this.acelx = 0.25 * -(Math.cos(this.angle));
};

Ship.prototype._acely = function() {
  this.acely = 0.25 * (Math.sin(this.angle));
};

Ship.prototype._dAngleCounter = function() {
  this.dAngle = -(5) * (Math.PI / 180);
};

Ship.prototype._dAngleClock = function() {
  this.dAngle = (5) * (Math.PI / 180);
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

Ship.prototype._fuelInUse = function() {
  if (this.fuel > 0) {
    this.dfuel = 1;

  } else {
    this.dfuel = 0;
    this.acelx = 0;
    this.acely = 0;
  };
};
Ship.prototype._fuelNotInUse = function() {
  this.dfuel = 0;
};
