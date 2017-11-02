function Ship(x, y) {
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.accel = 0;
  this.angle = 90 * (Math.PI / 180);
  this.fuel = 1000;
  this.radius = 22;
  this.color = "white";
  this.fuel = 1000;
  this.fuelconsume = 3;
};

Ship.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, this.angle - (Math.PI / 2), this.angle + (Math.PI / 2), true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.font = "25px Courier";
  ctx.fillText("Fuel: " + this.fuel + " L", 1550, 70);
  ctx.fillText("Vert. Speed:" + Math.round(this.speedY) + " m/s", 1550, 100);
  ctx.fillText("Angle: " + Math.round(this.angle * (180 / Math.PI)) + "º", 1550, 130);
};

Ship.prototype.update = function() {
  var gravity = 0.098;
  this.x += this.speedX;
  this.y -= this.speedY;
  this.speedX = this.speedX + (this.accel * -Math.cos(this.angle));
  this.speedY = this.speedY + (this.accel * Math.sin(this.angle)) - gravity;
};

Ship.prototype.fuelInUse = function() {
  if (this.fuel > 0) {
    this.fuel -= this.fuelconsume;
  } else {
    this.fuel = 0;
    this.fuelconsume = 0;
    this.accel = 0;
  }
};


Ship.prototype.move = function(codeset) {
  var incrementDegrees = 5;

  if (codeset.up && codeset.left && codeset.right) {
    this.accel = 0.25;
    this.fuelInUse();


  } else {
    this.accel = 0;
    this.fuel = this.fuel;

  }

  if (codeset.up && codeset.left) {
    this.accel = 0.25;
    this.angle -= (Math.PI / 180) * incrementDegrees;
    this.fuelInUse();
    ion.sound.play("thrust");
  } else {
    this.accel = 0;
    this.angle = this.angle;
    this.fuel = this.fuel;
  }

  if (codeset.up && codeset.right) {
    this.accel = 0.25;
    this.angle += (Math.PI / 180) * incrementDegrees;
    this.fuelInUse();
    ion.sound.play("thrust");
  } else {
    this.accel = 0;
    this.angle = this.angle;
    this.fuel = this.fuel;
  }

  if (codeset.up) {
    this.accel = 0.25;
    this.fuelInUse();
    ion.sound.play("thrust");
  } else {
    this.accel = 0;
    this.fuel = this.fuel;
  }

  if (codeset.left) {
    this.angle -= (Math.PI / 180) * incrementDegrees;
  } else {
    this.angle = this.angle;
  }

  if (codeset.right) {
    this.angle += (Math.PI / 180) * incrementDegrees;
  } else {
    this.angle = this.angle;
  }

};
