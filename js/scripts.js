// //Exercise Object Constructor
// function Workout(){
//   this.chosenExercises = [];
// }
//
// var exerciseGetter = function(){
//   var selectedExercise = upperBody[Math.floor(Math.random()*upperBody.length)];
//   console.log(selectedExercise);
//   return selectedExercise;
//   //Notes: try to add loop with "i" replacing "upperBody"
// }
// //NOTES: try to add the exercise Getter directly in this prototype
//
// Workout.prototype.exercisePusher = function(selectedExercise){
//   var pushedExercise = this.chosenExercises.push(selectedExercise);
//   return pushedExercise;
// }
//
// function Exercise(nameExercise, descriptionExercise, bodyPart){
//   this.nameExercise = nameExercise;
//   this.descriptionExercise = descriptionExercise;
//   this.bodyPart = bodyPart;
// }
//
//
// // This is our " pseudo- 'Database' of Exercises."
// var pushUpStandard = new Exercise ("Standard Pushup", "Place arms below shoulders in plank postition, lower your body, keeping core engaged and body in a straight line, push back up to plank", "Upper Body");
//
//
// var plankUpdown = new Exercise ("Up-Downs", "Begin in Standard Plank position, lower yourself to Elbow Plank position, one arm at a time. Return to Standard Plank Position, one arm at a time. Repeat", "Upper Body");
//
// var pushUpWide = new Exercise ("Wide Push Up", "Place arms in line with shoulders, slightly wider than shoulder width apart, do a pushup", "Upper Body");
//
// var restTime = new Exercise ("10 Seconds of Rest", "Stop what you're doing", "none");
//
// var upperBody = [pushUpStandard, plankUpdown, pushUpWide];
// var lowerBody = [squatStandard, squatSplit, highKneeStandard];
// var core = [plankStandard, plankElbow,];
// var cardio = [highKneeFast, jumpingJackStandard,];
// var exerciseCategories = [upperBody, lowerBody, core, cardio];



$(document).ready(function() {
  var core = ["plankStandard", "plankElbow", "restTime", "plankStandard", "plankElbow", "restTime", "plankStandard", "plankElbow", "restTime"];
  var seconds = ["20 seconds", "10 seconds"];


  for (var i=0; i < core.length; i++) {
    $(".list").append("<li class='clickDesc' data-toggle='collapse' data-target='#collapse'" + i +
    ">" + core[i] + "<div class='collapse' id='collapse'" + i + ">" + "test" + "</div>" + "</li>");
  }

  $(".btn-primary").click(function() {
      $(".collapse").collapse('toggle');
  });

  $("form#workoutGenerator").submit(function(event) {
    event.preventDefault();
    $(".formBox").fadeOut(1000);
      $(".col-md-4.second").addClass("col-md-8").removeClass("col-md-4");
      $(".col-md-8").text("hey whats up we are the best coders in the entire world, this is so fun, it's better than laying in bed eating pizza with the cat");
  });
});
