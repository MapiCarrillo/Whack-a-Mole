function Game(container) {
  this.moleArray = [];
  this.numberOfMoles = 5;
  this.container = container;
  this.html = "";
  this.indexesMole = [];
  this.domMole;
  this.level = 2000;
  this.start();
  this.round = 5;
  this.roundCounter = 0;
  
  
}

Game.prototype.start = function() {
  this.generateMoles();
  this.generateHtml();
  this.ply = new player();
  this.interval = setInterval(
    function() {
      if (this.roundCounter < this.round) {

        this.resetMole();
        this.getRandomMoles();
        this.roundCounter++;
        
        if (this.ply.clickMole === 5) {
          this.level -= 150;
          console.log("sube nivel");
        } else if (this.ply.clickMole === 15) {
          this.level -= 150;
          console.log("sube 2");
        }
        
      } else if (this.roundCounter >= this.round) {
        console.log(this)
        this.stop();
        clearInterval(this.interval);
      }
      //this.ply.clickMole++;
    }.bind(this), this.level);
};

Game.prototype.generateMoles = function() {
  for (var i = 0; i < this.numberOfMoles; i++) {
    this.moleArray.push(new Mole());
  }
};

Game.prototype.generateHtml = function() {
  this.moleArray.forEach(function(mole, index) {
    this.html += '<div class="mole" id="' + index + '"></div>';
  });
  $(this.container).html(html);
  this.domMole = $(".mole");
};

Game.prototype.getRandomMoles = function() {
  var numMoles = Math.floor(Math.random() * 2 + 1);
  for (var i = 0; i < numMoles; i++) {
    this.indexesMole.push(
      this.moleArray.indexOf(
        this.moleArray[Math.floor(Math.random() * this.moleArray.length)]
      )
    );
    if (this.indexesMole[0] === this.indexesMole[1]) {
      this.indexesMole.pop();
    } else {
      continue;
    }
  }
  this.showMole(this.indexesMole);
};

Game.prototype.showMole = function(indexesMole) {
  indexesMole.forEach(
    function(mole) {
      var game = this
      $(this.domMole[mole]).addClass("active");
      $(this.domMole[mole]).click(function(){
        if($(this).hasClass('active')) {
           game.ply.clickMole++;
          console.log("click +")
          
        }
        else{
          game.ply.clickMole--;
          game.ply.live -- ;
          console.log("click -")
        }
      })
    }.bind(this)
  );
  this.indexesMole = [];
};

Game.prototype.resetMole = function() {
  $(this.domMole).removeClass("active");
};
Game.prototype.stop = function() {
  this.resetMole();
  console.log("Your score is: " + this.ply.clickMole + "Your live is: " + this.ply.live);
};
