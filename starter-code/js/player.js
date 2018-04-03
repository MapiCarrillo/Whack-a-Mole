 function player (name) {
    this.clickMole = 0;
    this.live = 3;
    this.name = name || 'topito'

} 
 player.prototype.matchMole = function (mole){
    /* $(".active").on("click", function(){
       this.clickMole ++
    });    */
    console.log("matchmole") 
} 
