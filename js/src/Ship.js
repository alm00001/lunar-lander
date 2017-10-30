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
    this.draw = function(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, this.angle - (Math.PI / 2), this.angle + (Math.PI / 2), true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    };
};
