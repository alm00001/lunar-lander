
var intervalId;
$(document).ready(function() {
  var board = new Board();
  var ship = new Ship(board.width/2,100,"./img/ship1.png");
  var landingArea = new LandingArea(board.width,board.height);


//Sound precharging
  ion.sound({
    sounds: [
        {
            name: "cheers",
            volume: 1,
        }
    ],
    volume: 1,
    path: "../sfx",
    preload: true
});

// Play Sound
ion.sound.play("cheers");

intervalId = setInterval(function (){
    board.updateShips(ship, landingArea);
    //landingArea.draw(ctx);
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
