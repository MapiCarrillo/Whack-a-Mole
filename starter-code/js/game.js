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
};

Game.prototype.getRandomMoles = function() {
  //get random moles, 1 or 2
  var numberOfMoles = Math.floor(Math.random()*2+1)
  console.log(numberOfMoles)
  for (var i= 0; i < numberOfMoles; i++);
  
  //add active class to the items n the html
};


