function Game(container) {
  this.moleArray = [];
  this.numberOfMoles = 5;
  this.container = container;
  this.html = "";

  this.start();
}

Game.prototype.start = function() {
  this.generateMoles();
};

Game.prototype.generateMoles = function() {
  for (var i = 0; i < this.numberOfMoles; i++) {
    this.moleArray.push(new Mole());
  }
  this.generateHtml();
};

Game.prototype.generateHtml = function() {
  this.moleArray.forEach(function(mole, index) {
    this.html += '<div class="mole" id="' + index + '"></div>';
  });
  $(this.container).html(html);
  this.getRandomMoles();
};

Game.prototype.getRandomMoles = function() {
  var numMoles = Math.floor(Math.random() * 2 + 1);
  var indexesMole = [];
  for (var i = 0; i < numMoles; i++) {
    indexesMole.push(
      this.moleArray.indexOf(
        this.moleArray[Math.floor(Math.random() * this.moleArray.length)]
      )
    );
    if (indexesMole[0] === indexesMole[1]) {
      indexesMole.pop();
    } else {
      continue;
    }
  }
  this.showHide(indexesMole);
};

Game.prototype.showHide = function(indexesMole) {
  var domElement = $(".mole");
  indexesMole.forEach(function(mole) {
    console.log(mole)
    $(domElement[mole]).addClass('active')
  });

};
