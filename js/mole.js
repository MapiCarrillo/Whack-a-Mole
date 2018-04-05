function Mole(game, index) {
  this.game = game;
  this.element = $("<div>")
    .addClass("mole col")
    .attr("mole-idx", index);
  this.game.domMole.append(this.element);
  this.moleSongPush = new Audio();
  this.moleSongPush.volume = .1
  this.moleSongPush.src = "audios/zapsplat_cartoon_slip_fall_impact_18066.mp3"
  this.addEventListeners();
 
  
}

Mole.prototype.addEventListeners = function() {
  $(this.element).click(
    function() {
      console.log(this.element);
      if ($(this.element).hasClass("active")) {
        this.game.ply.clickMole++;
        this.game.pushMole($(this.element));
        this.moleSongPush.play();
        this.game.isAlive = false;
        console.log("click +");
      } else if (this.game.ply.clickMole === 0) {
        this.game.ply.clickMole = 0;
        this.game.ply.live--;
        console.log("click - 0");
      } else {
        this.game.ply.clickMole--;
        this.game.ply.live--;
        console.log("click -");
      }
    }.bind(this)
  );
};

/* Game.prototype.addEventListeners = function() {
    var game = this;
    this.domMole.each(
      function(mole) {
        $(this.domMole[mole]).click(function() {
          if ($(this).hasClass("active")) {
            game.ply.clickMole++;
            game.pushMole($(this));
            this.isAlive = false;
            console.log(this.isAlive)
            console.log("click +");
          } else if (game.ply.clickMole === 0) {
            game.ply.clickMole = 0;
            game.ply.live--;
            console.log("click - 0");
          } else {
            game.ply.clickMole--;
            game.ply.live--;
            console.log("click -");
          }
        });
      }.bind(this)
    );
    //this.ply.live--;
    console.log("no clic");
  }; */
