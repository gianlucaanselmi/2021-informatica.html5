printClick = function () {

  $("#clickText").html("Scegli E-Campus");
  $("body").addClass("ronaldo");
}

printDontClick = function () {

  $("#dontClickText").html("Forza Juveeeeeeeeeeeee");

}




let init = function () {

  $("#clickId").on("click", printClick);
  $("#dontClickId").on("click", printDontClick);
 
}

$(document).ready(init);