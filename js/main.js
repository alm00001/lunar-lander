$(document).ready(function() {
  var gravity = 0.098 /*0.1*/ ;
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
    //console.log(ship.acelx, ship.acely, ship.vx, ship.vy, ship.x, ship.y, "Angulo", (ship.angle * 180 / Math.PI));
    ship.draw(ctx);
  };



  //Comprueba si el "alunizaje" ha sido controlado o no
  function hitBottom() {
    var land = canvas.height - ship.radius; //LIMITE DE CHOQUE DE LA BOLA
    if (ship.y > land && ship.vy < 2) {
      ship.y = land; // DESTROZO EL VALOR DE Y
      clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
      //alert("Mission Accomplished");
    } else if (ship.y > land && ship.vy > 1) {
      ship.y = land; // DESTROZO EL VALOR DE Y
      clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
      //alert("looser");
    };
  };

  //////////////////////////////////////////////////////////////////////////////////

  var codeset = {
    38: false,
    37: false,
    39: false
  };

  console.log('Todos falsos¿?', codeset);

  $(document).on('keydown', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = true;
      console.log("Verdadero, solo lo que se presiona", codeset);
      if (codeset[38] && codeset[37] && codeset[39]) {
        ship.acelx = /*0.2*/ 0.17 * -(Math.cos(ship.angle));
        ship.acely = /*0.2*/ 0.17 * (Math.sin(ship.angle));
        ship.dAngle = -(2) * (Math.PI / 180);
        ship.dAngle = (2) * (Math.PI / 180);
      };
      if (codeset[38] && codeset[37]) {
        ship.acelx = /*0.2*/ 0.17 * -(Math.cos(ship.angle));
        ship.acely = /*0.2*/ 0.17 * (Math.sin(ship.angle));
        ship.dAngle = -(2) * (Math.PI / 180);
      };
      if (codeset[38] && codeset[39]) {
        ship.acelx = /*0.2*/ 0.17 * -(Math.cos(ship.angle));
        ship.acely = /*0.2*/ 0.17 * (Math.sin(ship.angle));
        ship.dAngle = (2) * (Math.PI / 180);
      };
      if (codeset[37] && codeset[39]) {
        ship.dAngle = -(2) * (Math.PI / 180);
        ship.dAngle = (2) * (Math.PI / 180);
      };
      if (codeset[38]) {
        ship.acelx = /*0.2*/ 0.17 * -(Math.cos(ship.angle));
        ship.acely = /*0.2*/ 0.17 * (Math.sin(ship.angle));
      };
      if (codeset[37]) {
        ship.dAngle = -(2) * (Math.PI / 180);
      };
      if (codeset[39]) {
        ship.dAngle = (2) * (Math.PI / 180);
      }
    }
  }).on('keyup', function(e) {
      if (e.keyCode in codeset) {
        codeset[e.keyCode] = false;
        console.log("Falso lo que se levanta?", codeset);
        if (codeset[38] == false && codeset[37] == false && codeset[39] == false) {
          ship.acelx = 0;
          ship.acely = 0;
          ship.dAngle = 0;
          ship.dAngle = 0;
        };
        if (codeset[38] == false && codeset[37] == false) {
          ship.acelx = 0;
          ship.acely = 0;
          ship.dAngle = 0;
        };
        if (codeset[38] == false && codeset[39] == false) {
          ship.acelx = 0;
          ship.acely = 0;
          ship.dAngle = 0;
        };
        if (codeset[37] == false && codeset[39] == false) {
          ship.dAngle = 0;
          ship.dAngle = 0;
        };
        if (codeset[38] == false) {
          ship.acelx = 0;
          ship.acely = 0;
          console.log(ship.acelx, ship.acely);
        };
        if (codeset[37] == false) {
          ship.dAngle = 0;
        };
        if (codeset[39] == false) {
          ship.dAngle = 0;
        }
      }
    });
var intervalId = setInterval (update, 20);
});
