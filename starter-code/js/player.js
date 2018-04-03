 function player () {
    this.clickMole = 0;
    this.live = 3;
    this.matchMole();

} 
 player.prototype.matchMole = function (mole){
    $(".active").on("click", function(){
       this.clickMole ++
       console.log("click") 
    });   
} 
