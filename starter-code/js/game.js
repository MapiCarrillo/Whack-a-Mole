function Game(container) {
  this.moleArray = [];
  this.numberOfMoles = 5;
  this.container = container;
  this.html = "";
  this.indexesMole = [];
  this.domMole;
  this.start();
}

Game.prototype.start = function() {
  this.generateMoles();
  this.generateHtml();
  this.interval = setInterval(function(){
    this.resetMole()
    this.getRandomMoles();
  }.bind(this),2000)
  
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
  
  indexesMole.forEach(function(mole) {
    console.log(this.domMole)
    console.log(this);
    $(this.domMole[mole]).addClass('active')
  }.bind(this));
  this.indexesMole = []
};


Game.prototype.resetMole = function() {
  $(this.domMole).removeClass('active')
};
