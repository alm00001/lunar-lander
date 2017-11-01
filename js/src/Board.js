
function Board(){
this.gravity = 0.098;
this.ctx = document.getElementById('canvas').getContext('2d');
this.width = 1920;
this.height = 1080;
};


Board.prototype.updateShips= function (ship, landing){
  this._hitBottom(ship); // LO PRIMERO DE TODO COMPROBAR SI LA PELOTA SE HA CHOCADO
  console.log(landing);
  landing._hitTop(ship);
  this.ctx.clearRect(0, 0, this.width, this.height);
  ship.vx = ship.vx + ship.acelx;
  ship.x += ship.vx;
  ship.vy = ship.vy + (this.gravity - ship.acely); // MODIFICA EL EFECTO GRAVEDAD EN FUNCIÓN
  ship.y += ship.vy; // DEL EVENTO DE PULSACIÓN DE TECLA
  ship.angle += ship.dAngle;
  ship.fuel -= ship.dfuel;
  landing.x += landing.dx;
  landing.y += landing.dy;
  console.log(ship.acelx, ship.acely, ship.vx, ship.vy, ship.x, ship.y, "Angulo", (ship.angle * 180 / Math.PI));
  ship._draw(this.ctx);
  landing._draw(this.ctx);
};

Board.prototype._hitBottom = function (ship){
  var land = this.height - ship.radius; //LIMITE DE CHOQUE DE LA BOLA
  if (ship.y > land && ship.vy < 2 ) {
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Mission Accomplished!!!!!  "+ship.fuel*2+" Points");
    clearInterval();
  } else if (ship.y > land && ship.vy > 1) {
    ship.y = land; // DESTROZO EL VALOR DE Y
    clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
    alert("Game Over");
  };
};
