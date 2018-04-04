$(document).ready(function() {
  
  $("#start-game").click(function() {
    $("#modal-start").modal("hide");
    $("#game-container").show();
    $("#show-modal").hide();
    var name= $("#formGroupExampleInput").val();
    var ronda= $("#formGroupExampleInput2").val();
    var game = new Game("#mole-game", ronda, name);
  });
});
