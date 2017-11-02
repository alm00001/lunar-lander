
var intervalId;
$(document).ready(function() {
  var board = new Board();
  var ship = new Ship(board.width/2,100);
  var landingArea = new LandingArea();

intervalId = setInterval(function (){
    board.updateShips(ship, landingArea);
    //landingArea._draw(ctx);
  }, 20);



  //Comprueba si el "alunizaje" ha sido controlado o n

  //////////////////////////////////////////////////////////////////////////////////

  var codeset = {
    up: false,
    left: false,
    right: false,
    down: false
  };

//  console.log('Todos falsos¿?', codeset);

  $(document).on('keydown', function(e) {

    switch(e.keyCode){
      case 38: codeset.up = true; break;
      case 37: codeset.left = true; break;
      case 39: codeset.right = true; break;
      case 40: codeset.down = true; break;
    }
    ship.move(codeset);

  }).on('keyup', function(e) {
    switch(e.keyCode){
      case 38: codeset.up = false; break;
      case 37: codeset.left = false; break;
      case 39: codeset.right = false; break;
      case 40: codeset.down = false; break;
    }
    ship.move(codeset);
  });

});
