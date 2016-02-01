//Exercise Object Constructor
function Exercise(nameExercise, descriptionExercise, bodyPart){
  this.nameExercise = nameExercise;
  this.descriptionExercise = descriptionExercise;
  this.bodyPart = bodyPart;
}


// Exercise.prototype.categorize = function(){
// This is our " pseudo- 'Database' of Exercises."
var pushUpStandard = new Exercise ("Standard Pushup", "Place arms below shoulders in plank postition, lower your body, keeping core engaged and body in a straight line, push back up to plank", "UpperBody");

var squatStandard = new Exercise ("Standard Squat", "Stand with feet shoulder width apart, lower your body like you're sitting into a chair, keeping your knees behind your toes. Return to standing", "Lower Body");

var highKneeStandard = new Exercise ("High Knee", "Alternate raising knees to hip height", "Lower Body");

var highKneeFast = new Exercise ("Fast High Knee / Run in Place", "Run in place, raising knees to hip height, swinging arms", "Cardio");

var plankStandard = new Exercise ("Plank", "Place Arms slightly greater than shoulder width apart and toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged", "Core");

var plankElbow = new Exercise ("Elbow Plank", "Bend arms and place elbows on the ground beneath shoulders and place toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged" , "Core")

var plankUpdown = new Exercise ("Up-Downs", "Begin in Standard Plank position, lower yourself to Elbow Plank position, one arm at a time. Return to Standard Plank Position, one arm at a time. Repeat", "UpperBody");

var jumpingJackStandard = new Exercise ("Standard Jumping Jack", "Do a Jumping Jack. Repeat", "Cardio");

var squatSplit = new Exercise ("Split Squat", ".....description.....", "Lower Body");

var pushUpWide = new Exercise ("Wide Push Up", "Place arms in line with shoulders, slightly wider than shoulder width apart, do a pushup", "Upper Body")
;

var restTime = new Exercise ("10 Seconds of Rest", "Stop what you're doing", "none");

var upperBody = [standardPushUp, plankUpdown, pushUpWide];
var lowerBody = [squatStandard, squatSplit, highKneeStandard];
var core = [plankStandard, plankElbow,];
var cardio = [highKneeFast, jumpingJackStandard,];




$(document).ready(function() {



});
