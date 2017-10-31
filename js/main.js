
$(document).ready(function() {
  var gravity = 0.098;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var ship = new Ship;


  function update() {
    hitBottom(); // LO PRIMERO DE TODO COMPROBAR SI LA PELOTA SE HA CHOCADO
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ship.vx = ship.vx + ship.acelx;
    ship.x += ship.vx;
    ship.vy = ship.vy + (gravity - ship.acely); // MODIFICA EL EFECTO GRAVEDAD EN FUNCIÓN
    ship.y += ship.vy; // DEL EVENTO DE PULSACIÓN DE TECLA
    ship.angle += ship.dAngle;
    ship.fuel -= ship.dfuel;
    //console.log(ship.acelx, ship.acely, ship.vx, ship.vy, ship.x, ship.y, "Angulo", (ship.angle * 180 / Math.PI));
    ship.draw(ctx);
  };



  //Comprueba si el "alunizaje" ha sido controlado o no
  function hitBottom() {
    var land = canvas.height - ship.radius; //LIMITE DE CHOQUE DE LA BOLA
    if (ship.y > land && ship.vy < 2) {
      ship.y = land; // DESTROZO EL VALOR DE Y
      clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
      alert("Mission Accomplished");
    } else if (ship.y > land && ship.vy > 1) {
      ship.y = land; // DESTROZO EL VALOR DE Y
      clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
      alert("looser");
    };
  };

  //////////////////////////////////////////////////////////////////////////////////

  var codeset = {
    38: false,
    37: false,
    39: false
  };

  //console.log('Todos falsos¿?', codeset);

  $(document).on('keydown', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = true;
      //console.log("Verdadero, solo lo que se presiona", codeset);
      if (codeset[38] && codeset[37] && codeset[39]) {
        ship._acelx();
        ship._acely();
        ship._dAngleCounter();
        ship._dAngleClock();
        ship._usingFuel();
      };
      if (codeset[38] && codeset[37]) {
        ship._acelx();
        ship._acely();
        ship._dAngleCounter();
        ship._usingFuel();
      };
      if (codeset[38] && codeset[39]) {
        ship._acelx();
        ship._acely();
        ship._dAngleClock();
        ship._usingFuel();
      };
      if (codeset[37] && codeset[39]) {
        ship._dAngleCounter();
        ship._dAngleClock();
      };
      if (codeset[38]) {
        ship._acelx();
        ship._acely();
        ship._usingFuel();
      };
      if (codeset[37]) {
        ship._dAngleCounter();
      };
      if (codeset[39]) {
        ship._dAngleClock();
      }
    }
  }).on('keyup', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = false;
      //console.log("Falso lo que se levanta?", codeset);
      if (codeset[38] == false && codeset[37] == false && codeset[39] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleCounterR();
        ship._dAngleClockR();
        ship._notUsingFuel();
      };
      if (codeset[38] == false && codeset[37] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleCounterR();
        ship._notUsingFuel();
      };
      if (codeset[38] == false && codeset[39] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleClockR();
        ship._notUsingFuel();
      };
      if (codeset[37] == false && codeset[39] == false) {
        ship._dAngleCounterR();
        ship._dAngleClockR();
      };
      if (codeset[38] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._notUsingFuel();
      };
      if (codeset[37] == false) {
        ship._dAngleCounterR();
      };
      if (codeset[39] == false) {
        ship._dAngleClockR();
      }
    }
  });
  var intervalId = setInterval(update, 20);
});
