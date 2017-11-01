
var intervalId;
$(document).ready(function() {
  var board = new Board();
  var ship = new Ship(100,100);
  var landingArea = new LandingArea();

intervalId = setInterval(function (){
    board.updateShips(ship, landingArea);
    //landingArea._draw(ctx);
  }, 20);



  //Comprueba si el "alunizaje" ha sido controlado o n

  //////////////////////////////////////////////////////////////////////////////////

  var codeset = {
    38: false,
    37: false,
    39: false
  };

//  console.log('Todos falsos¿?', codeset);

  $(document).on('keydown', function(e) {
    if (e.keyCode in codeset) {
      codeset[e.keyCode] = true;
      //console.log("Verdadero, solo lo que se presiona", codeset);
      if (codeset[38] && codeset[37] && codeset[39]) {
        ship._acelx();
        ship._acely();
        ship._dAngleCounter();
        ship._dAngleClock();
        ship._fuelInUse();
      };
      if (codeset[38] && codeset[37]) {
        ship._acelx();
        ship._acely();
        ship._dAngleCounter();
        ship._fuelInUse();
      };
      if (codeset[38] && codeset[39]) {
        ship._acelx();
        ship._acely();
        ship._dAngleClock();
        ship._fuelInUse();
      };
      if (codeset[37] && codeset[39]) {
        ship._dAngleCounter();
        ship._dAngleClock();
      };
      if (codeset[38]) {
        ship._acelx();
        ship._acely();
        ship._fuelInUse();
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
      // console.log("Falso lo que se levanta?", codeset);
      if (codeset[38] == false && codeset[37] == false && codeset[39] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleCounterR();
        ship._dAngleClockR();
        ship._fuelNotInUse();
      };
      if (codeset[38] == false && codeset[37] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleCounterR();
        ship._fuelNotInUse();
      };
      if (codeset[38] == false && codeset[39] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._dAngleClockR();
        ship._fuelNotInUse();
      };
      if (codeset[37] == false && codeset[39] == false) {
        ship._dAngleCounterR();
        ship._dAngleClockR();
      };
      if (codeset[38] == false) {
        ship._acelxR();
        ship._acelyR();
        ship._fuelNotInUse();
        //console.log(ship.acelx, ship.acely);
      };
      if (codeset[37] == false) {
        ship._dAngleCounterR();
      };
      if (codeset[39] == false) {
        ship._dAngleClockR();
      }
    }
  });

});
