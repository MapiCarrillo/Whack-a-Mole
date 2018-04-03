function Game(container, rounds, playerName) {
  this.moleArray = [];
  this.numberOfMoles = 5;
  this.container = container;
  this.html = "";
  this.indexesMole = [];
  this.domMole;
  this.level = 2000;
  this.start();
  this.round = rounds;
  this.roundCounter = 0;
  this.playerName = playerName;
}

Game.prototype.start = function() {
  this.generateMoles();
  this.generateHtml();
  this.addEventListeners();
  this.ply = new player(this.playerName);
  this.interval = setInterval(
    function() {
      if (this.roundCounter < this.round) {
        this.resetMole();
        this.getRandomMoles();
        this.roundCounter++;
        
        if (this.ply.clickMole === 5) {
          this.level -= 150;
        } else if (this.ply.clickMole === 15) {
          this.level -= 150;
        }
        if (this.ply.live <= 0) {
          this.stop();
          clearInterval(this.interval);
        }
      } else if (this.roundCounter >= this.round) {
        this.stop();
        clearInterval(this.interval);
      }
    }.bind(this),
    this.level
  );
};

Game.prototype.generateMoles = function() {
  for (var i = 0; i < this.numberOfMoles; i++) {
    this.moleArray.push(new Mole());
  }
};

Game.prototype.generateHtml = function() {
  //var html ='';
  var game = this;
  this.moleArray.forEach(
    function(mole, index) {
      this.html += '<div class="mole" id="' + index + '"></div>';
    }.bind(this)
  );
  $(this.container).html(game.html);
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
      var game = this;
      $(this.domMole[mole]).addClass("active");
    }.bind(this)
  );
  this.indexesMole = [];
};

Game.prototype.resetMole = function() {
  console.log($('.mole.active').length)
  this.ply.live = this.ply.live - $('.mole.active').length
  $(this.domMole).removeClass("active");
};

Game.prototype.addEventListeners = function() {
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
};

Game.prototype.pushMole = function(mole) {
  console.log("Push");
  mole.addClass("push");
  mole.removeClass("active");
  this.timeOut = setTimeout(
    function() {
      mole.removeClass("push");
    }.bind(this),
    1000
  );
};

Game.prototype.stop = function() {
  this.resetMole();
  console.log(
    "Your score is: " + this.ply.clickMole + " Your live is: " + this.ply.live
  );
};
