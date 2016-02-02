//Exercise Object Constructor
function Workout(){
  this.chosenExercises = [];
}

Workout.prototype.exercisePusher = function(){
  var selectedExercises = [];

  exerciseCategories.forEach(function(category){
    selectedExercises.push(category[Math.floor(Math.random()*category.length)]);
  });
  this.chosenExercises = selectedExercises;
  return this.chosenExercises;
}

function Exercise(nameExercise, descriptionExercise, bodyPart){
  this.nameExercise = nameExercise;
  this.descriptionExercise = descriptionExercise;
  this.bodyPart = bodyPart;
}


// This is our " pseudo- 'Database' of Exercises."
var pushUpStandard = new Exercise ("Standard Pushup", "Place arms below shoulders in plank postition, lower your body, keeping core engaged and body in a straight line, push back up to plank", "Upper Body");

var squatStandard = new Exercise ("Standard Squat", "Stand with feet shoulder width apart, lower your body like you're sitting into a chair, keeping your knees behind your toes. Return to standing", "Lower Body");

var highKneeStandard = new Exercise ("High Knee", "Alternate raising knees to hip height", "Lower Body");

var highKneeFast = new Exercise ("Fast High Knee / Run in Place", "Run in place, raising knees to hip height, swinging arms", "Cardio");

var plankStandard = new Exercise ("Plank", "Place Arms slightly greater than shoulder width apart and toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged", "Core");

var plankElbow = new Exercise ("Elbow Plank", "Bend arms and place elbows on the ground beneath shoulders and place toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged" , "Core")

var plankUpdown = new Exercise ("Up-Downs", "Begin in Standard Plank position, lower yourself to Elbow Plank position, one arm at a time. Return to Standard Plank Position, one arm at a time. Repeat", "Upper Body");

var jumpingJackStandard = new Exercise ("Standard Jumping Jack", "Do a Jumping Jack. Repeat", "Cardio");

var squatSplit = new Exercise ("Split Squat", ".....description.....", "Lower Body");

var pushUpWide = new Exercise ("Wide Push Up", "Place arms in line with shoulders, slightly wider than shoulder width apart, do a pushup", "Upper Body");

var restTime = new Exercise ("10 Seconds of Rest", "Stop what you're doing", "none");

var lineJump = new Exercise ("Line Jumps", "Jump across a line and back, keep feet together", "Cardio");

var crunchesStandard = new Exercise ("Standard Crunches", "Do a sit-up", "Core");

var tricepDips= new Exercise ("Tricep Dips", "Facing the ceiling, hands and feet flat on the ground (as if you were about to do a crab walk), extend one leg straight up into the air and dip by bending at the elbows. Alternate which leg is extended with each dip.", "Upper Body");

var wallSit = new Exercise ("Wall Sit", "Who needs a chair when there’s a wall? Slowly slide your back down a wall until the thighs are parallel to the ground. Make sure the knees are directly above the ankles and keep the back straight. Go for 60 seconds per set (or however long it takes to turn those legs to jelly). Need more fire? Add some bicep curls.", "Lower Body");

var superman = new Exercise ("Superman", "Want some superpowers? Lie face down with arms and legs extended. Keeping the torso as still as possible, simultaneously raise the arms and legs to form a small curve in the body. Cape optional.", "Core");

var  burpees= new Exercise ("Burpees", "One of the most effective full-body exercises around, this one starts out in a low squat position with hands on the floor. Next, kick the feet back to a push-up position, complete one push-up, then immediately return the feet to the squat position. Leap up as high as possible before squatting and moving back into the push-up portion of the show.", "Cardio");

var upperBody = [pushUpStandard, plankUpdown, pushUpWide, tricepDips];
var lowerBody = [squatStandard, squatSplit, highKneeStandard, wallSit];
var core = [plankStandard, plankElbow, crunchesStandard, superman];
var cardio = [highKneeFast, jumpingJackStandard, lineJump, burpees];
var exerciseCategories = [upperBody, cardio, lowerBody, core, cardio];



$(document).ready(function() {



});
