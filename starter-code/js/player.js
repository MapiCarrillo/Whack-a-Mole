 function player () {
    this.clickMole = 0;
    this.live = 3;
    this.matchMole();

} 
 player.prototype.matchMole = function (){
    $(".active").click(function(){
        this.clickMole++
    })
} 