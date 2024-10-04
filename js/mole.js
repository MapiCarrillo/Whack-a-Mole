function Mole(game, index) {
  this.game = game;
  // this.element = $("<div>")
  //   .addClass("mole col")
  //   .attr("mole-idx", index);
  // this.game.domMole.append(this.element);
  this.element = document.querySelectorAll('[mole-idx="'+ index +'"]');
  this.moleSongPush = new Audio();
  this.moleSongPush.volume = 0.1;
  this.moleSongPush.src = "audios/zapsplat_cartoon_slip_fall_impact_18066.mp3";
  // this.addEventListener();
  this.createEvent();
  console.log('mole')
}

Mole.prototype.createEvent = function() {
  this.element.forEach(mole => {
    mole.addEventListener("click", () => {
      if(mole.classList.contains("active")){
        this.game.ply.clickMole++;
        this.game.pushMole(mole);
        this.moleSongPush.play();
        this.game.isAlive = false;
        console.log("click +");
      } else if (this.game.ply.clickMole === 0){
        this.game.ply.clickMole = 0;
        this.game.ply.live--;
        console.log("click - 0");
      } else {
        this.game.ply.clickMole--;
        this.game.ply.live--;
        console.log("click -");
      }
    });
  });
}; 
// Mole.prototype.addEventListener("click", function(e){
//   console.log(e)
// });
// Mole.prototype.addEventListeners = function() {
  // $(this.element).click(
  //   function() {
  //     console.log(this.element);
  //     if ($(this.element).hasClass("active")) {
  //       this.game.ply.clickMole++;
  //       this.game.pushMole($(this.element));
  //       this.moleSongPush.play();
  //       this.game.isAlive = false;
  //       console.log("click +");
  //     } else if (this.game.ply.clickMole === 0) {
  //       this.game.ply.clickMole = 0;
  //       this.game.ply.live--;
  //       console.log("click - 0");
  //     } else {
  //       this.game.ply.clickMole--;
  //       this.game.ply.live--;
  //       console.log("click -");
  //     }
  //   }.bind(this)
  // );

// };

