function Ship(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.accel = 0;
    this.angle = 90*(Math.PI/180);
    this.fuel = 1000;
    this.radius = 22;
    this.color = "white";
    this.fuel = 1000;
};

Ship.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, this.angle - (Math.PI / 2), this.angle + (Math.PI / 2), true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.font = "30px Courier";
  ctx.fillText("Fuel: " + this.fuel, 1600 , 100);
};

Ship.prototype.update = function() {
  var gravity = 0.098;
  this.x += this.speedX = this.speedX + (this.accel*-Math.cos(this.angle)); //signos????
  this.y -= this.speedY = this.speedY + (this.accel*Math.sin(this.angle)) - gravity; //creo que aqui los signos estan bien
};

Ship.prototype.move = function(codeset){
  var incrementDegrees = 5;
  var fuelconsume= 3;

  if(codeset.up && codeset.left && codeset.right){
    this.accel = 0.25;
    this.fuel -= fuelconsume;
  }else{
    this.accel = 0;
    this.fuel = this.fuel;
  }

  if(codeset.up && codeset.left){
    this.accel = 0.25;
    this.angle -= (Math.PI/180) * incrementDegrees;
    this.fuel -= fuelconsume;
  }else{
    this.accel = 0;
    this.angle = this.angle;
    this.fuel = this.fuel;
  }

  if(codeset.up && codeset.right){
    this.accel = 0.25;
    this.angle += (Math.PI/180) * incrementDegrees;
    this.fuel -= fuelconsume;
  }else{
    this.accel = 0;
    this.angle = this.angle;
    this.fuel = this.fuel;
  }

  if(codeset.up){
    this.accel = 0.25;
    this.fuel -= fuelconsume;
  }else{
    this.accel = 0;
    this.fuel = this.fuel;
  }

  if(codeset.left){
    this.angle -= (Math.PI/180) * incrementDegrees;
  }else{
    this.angle = this.angle;
  }

  if(codeset.right){
    this.angle += (Math.PI/180) * incrementDegrees;
  }else{
    this.angle = this.angle;
  }

};
