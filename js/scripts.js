














$(document).ready(function() {
  $("form#workoutGenerator").submit(function(event) {
    event.preventDefault();
    $(".formBox").fadeOut(1000);
      $(".col-md-4.second").addClass("col-md-8").removeClass("col-md-4");
      $(".col-md-8").text("hey whats up we are the best coders in the entire world, this is so fun, it's better than laying in bed eating pizza with the cat");
  });
});
