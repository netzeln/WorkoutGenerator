//Exercise Object Constructor
function Workout(muscleInput, equipmentInput, timeInput){
  this.chosenExercises = [];
  this.availableEquipment = equipmentInput;
  this.muscleInput = muscleInput;
  this.timeInput = timeInput;
}

Workout.prototype.equipmentFilterer = function(equipmentInput) {
  var equipmentAvailable = this.availableEquipment;
  var equipmentExercisesFiltered = [];

  equipmentAvailable.forEach(function(equipment) {
    equipmentExercises.forEach(function(exercise) {
      if (exercise.neededEquipment === equipment) {
        equipmentExercisesFiltered.push(exercise);
      }
    });
  });

  equipmentExercisesFiltered.forEach(function(filteredExercise) {
    if (filteredExercise.bodyPart === "Upper Body") {
      upperBody.push(filteredExercise);
    } else if (filteredExercise.bodyPart === "Lower Body") {
      lowerBody.push(filteredExercise);
    } else if (filteredExercise.bodyPart === "Core") {
      core.push(filteredExercise);
    } else {
      cardio.push(filteredExercise);
    }
  });
}


Workout.prototype.exercisePusher = function() {
  var selectedExercises = [];
  var focusInput = this.muscleInput;
  if (focusInput === "upper-body") {
    upperBodyFocus.forEach(function(category) {
      selectedExercises.push(category[Math.floor(Math.random() * category.length)]);
    });
  } else if (focusInput === "lower-body") {
    lowerBodyFocus.forEach(function(category) {
      selectedExercises.push(category[Math.floor(Math.random() * category.length)]);
    });
  } else if (focusInput === "core") {
    coreFocus.forEach(function(category) {
      selectedExercises.push(category[Math.floor(Math.random() * category.length)]);
    });
  } else if (focusInput === "cardio") {
    cardioFocus.forEach(function(category) {
      selectedExercises.push(category[Math.floor(Math.random() * category.length)]);
    });
  } else {
    exerciseCategories.forEach(function(category) {
      selectedExercises.push(category[Math.floor(Math.random() * category.length)]);
    });
  }
  this.chosenExercises = selectedExercises;
  return this.chosenExercises;
}


Workout.prototype.timeSelection = function(){
  var reps;
  if(this.timeInput == 30 || this.timeInput == 15 || this.timeInput == 25){
    return reps = 3;
  }else{
    return reps = 2;
  }
}

Workout.prototype.setsText = function(){
  var setsTextWritten;
  if(this.timeInput == 10 || this.timeInput == 15){
    return setsTextWritten = "<li class='instructions'>Then <em>Repeat</em> your set.</li>";
  }else if(this.timeInput == 20) {
    return setsTextWritten = "<li class='instructions'>Then Repeat your first Set. </li> <li class='instructions'>Then, Perform each exercise in your second set 2 times. </li><li class='instructions'>Then repeat your second set.</li>";
  }else if (this.timeInput == 25){
    return setsTextWritten = "<li class='instructions'>Then Repeat your first set.</li><li class='instructions'> Take a 2 Minute Break.</li><li class='instructions'> Perform each exercise in your second set 3 times.</li></ul>";
  }else if(this.timeInput == 30) {
    return setsTextWritten = "<li class='instructions'>Then Repeat your first set.</li><li class='instructions'> Take a 2 minute Break</li> <li class='instructions'>Perform each exercise in your second set 3 times.</li><li class='instructions'>Then repeat your second set.</li> </ul>";
  } else {
    return setsTextWritten = "<li class='instructions'> Great Job!</li></ul>"
  }
}

//Exercise Object Constructor for Pseudo Database
function Exercise(nameExercise, descriptionExercise, bodyPart, neededEquipment){
  this.nameExercise = nameExercise;
  this.descriptionExercise = descriptionExercise;
  this.bodyPart = bodyPart;
  this.neededEquipment = neededEquipment;
}

// This is our " pseudo- 'Database' of Exercises."
    // These exercises do not need any equipment
var pushUpStandard = new Exercise("Standard Pushup", "Place arms below shoulders in plank postition, lower your body, keeping core engaged and body in a straight line, push back up to plank", "Upper Body", "none");

var squatStandard = new Exercise("Standard Squat", "Stand with feet shoulder width apart, lower your body like you're sitting into a chair, keeping your knees behind your toes. Return to standing", "Lower Body", "none");

var highKneeStandard = new Exercise("High Knee", "Alternate raising knees to hip height", "Lower Body", "none");


var highKneeFast = new Exercise ("High Knee / Run in Place", "Run in place, raising knees to hip height, swinging arms", "Cardio", "none");

var plankStandard = new Exercise("Plank", "Place Arms slightly greater than shoulder width apart and toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged", "Core", "none");

var plankElbow = new Exercise("Elbow Plank", "Bend arms and place elbows on the ground beneath shoulders and place toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged", "Core", "none")

var plankUpdown = new Exercise("Up-Downs", "Begin in Standard Plank position, lower yourself to Elbow Plank position, one arm at a time. Return to Standard Plank Position, one arm at a time. Repeat", "Upper Body", "none");

var jumpingJackStandard = new Exercise("Standard Jumping Jack", "Do a Jumping Jack. Repeat", "Cardio", "none");

var squatSplit = new Exercise("Split Squat", ".....description.....", "Lower Body", "none");

var pushUpWide = new Exercise("Wide Push Up", "Place arms in line with shoulders, slightly wider than shoulder width apart, do a pushup", "Upper Body", "none");

var restTime = new Exercise("10 Seconds of Rest", "Stop what you're doing", "none", "none");

var lineJump = new Exercise("Line Jumps", "Jump across a line and back, keep feet together", "Cardio", "none");

var crunchesStandard = new Exercise("Standard Crunches", "Do a sit-up", "Core", "none");

var tricepDips = new Exercise("Tricep Dips", "Facing the ceiling, hands and feet flat on the ground (as if you were about to do a crab walk), extend one leg straight up into the air and dip by bending at the elbows. Alternate which leg is extended with each dip.", "Upper Body", "none");

var wallSit = new Exercise("Wall Sit", "Who needs a chair when there’s a wall? Slowly slide your back down a wall until the thighs are parallel to the ground. Make sure the knees are directly above the ankles and keep the back straight. Go for 60 seconds per set (or however long it takes to turn those legs to jelly). Need more fire? Add some bicep curls.", "Lower Body", "none");

var superman = new Exercise("Superman", "Want some superpowers? Lie face down with arms and legs extended. Keeping the torso as still as possible, simultaneously raise the arms and legs to form a small curve in the body. Cape optional.", "Core", "none");

var burpees = new Exercise("Burpees", "One of the most effective full-body exercises around, this one starts out in a low squat position with hands on the floor. Next, kick the feet back to a push-up position, complete one push-up, then immediately return the feet to the squat position. Leap up as high as possible before squatting and moving back into the push-up portion of the show.", "Cardio", "none");

    // These exercises require a chair
var pushUpIncline = new Exercise("Incline Push-Ups", "Place both palms on the seat of the chair and walk your feet back to a plank position. Keeping your body in a straight line between the top of your head and your heels, bend your elbows and lower your body toward the seat. Pause, then push up through your palms to return to starting position. Repeat.", "Upper Body", "Chair");

var seatTaps = new Exercise("Seat Taps", "Stand facing the front of the chair. Simultaneously lift your right arm and tap the seat of the chair with your left toes. Immediately bring your left foot back down to the ground, and alternate sides so you lift your left arm and tap the seat with your right toes. Continue to alternate taps as quickly as possible, using your arms for momentum and balance.", "Cardio", "Chair");

var seatedKneeLifts = new Exercise("Seated Knee Lifts", "Sit on edge of chair, knees bent, feet flat. Grasp sides of chair, lean back slightly. Pull knees toward chest as you crunch upper body forward using abs, not arms. Lower feet almost to floor, but don't let them touch until the end of the set.", "Core", "Chair");

    // These exercises require a resistance band
var squatFront = new Exercise ("Front Squat with Band", "Stand on band with feet slightly wider than shoulder width. Holding a handle in each hand, bring the top of the band over each shoulder. (If it's too long, secure band in place by crossing your arms at your chest.) Sit straight down, chest up, abs firm, pressing knees out over your toes", "Lower Body", "Resistance Band");

var lateralBandWalk = new Exercise("Lateral Band Walk", "Don’t sidestep these side steps! Step into a loop band or tie a therapy band around the lower legs, just above both ankles. Place feet shoulder-width apart to create tension on the band. From a half-squat position, shift your weight to the left side, stepping sideways with the right leg. Move the standing leg slightly in, but keep the band taut. Take 8 to 10 steps before heading back the other way.", "Lower Body", "Resistance Band");

    // These exercises require free weights
var hammerCurl = new Exercise("Hammer Curl", "Stand with the feet shoulder width apart, knees slightly bent and back straight. Hold a dumbbell in each hand with the palms facing in, towards each other and elbows straight. Keep your upper arms still as you bend the elbows to lift the weights from your sides up towards your shoulders. Be careful not to arch your back or swing the weights. Slowly return the weights back to the starting position.", "Upper Body", "Weights");

var russianTwist = new Exercise("Russian Twist", "Sit on the floor with your feet in the air and knees bent, holding a dumbbell in both hands in front of your sternum. Keeping your core braced and arms straight, rotate to one side. Then twist the other way. Return to the start again to complete one rep.", "Core", "Weights");

var equipmentExercises = [pushUpIncline, hammerCurl, squatFront, lateralBandWalk, seatedKneeLifts, russianTwist, seatTaps];

var upperBody = [pushUpStandard, plankUpdown, pushUpWide, tricepDips];
var lowerBody = [squatStandard, squatSplit, highKneeStandard, wallSit];
var core = [plankStandard, plankElbow, crunchesStandard, superman];
var cardio = [highKneeFast, jumpingJackStandard, lineJump, burpees];

var exerciseCategories = [upperBody, cardio, lowerBody, core, cardio];
var upperBodyFocus = [upperBody, cardio, upperBody, cardio, upperBody];
var lowerBodyFocus = [lowerBody, cardio, lowerBody, cardio, lowerBody];
var coreFocus = [core, cardio, core, cardio, core];
var cardioFocus = [cardio, lowerBody, cardio, core, cardio];


$(document).ready(function() {
  $("form#workoutGenerator").submit(function(event) {

    var nameInput = $("input#userName").val();
    var timeInput = $(this).find("select.time-choice").val();
    var muscleInput = $(this).find("select.focus-choice").val();
    var equipmentInput = [];
    $.each($("input[name='equip']:checked"), function() {
      equipmentInput.push($(this).val());
    });

    var newWorkout = new Workout(muscleInput, equipmentInput, timeInput);
    var newWorkoutFilterer = newWorkout.equipmentFilterer();

    var timerCount;
    if (timeInput < 20) {
      timerCount = 1;
    } else {
      timerCount = 2;
    }

    for (var j = 0; j < timerCount; j++) {
      var newWorkoutList = newWorkout.exercisePusher();
      for (var i=0; i < newWorkoutList.length; i++) {
        var randomId = Math.floor(Math.random() * 0x100);
        $(".exerciseList").append("<li class='clickDesc' data-toggle='collapse' data-target='#collapse" + randomId +"'>" + newWorkoutList[i].nameExercise + "<span class='timeDisplay'>" + "<p>" + "20s" + "</p>" + "</span>" + "<div class='collapse' id='collapse" + randomId + "'>" + "<p class='workoutSummary'>" +  newWorkoutList[i].descriptionExercise + "</p>" + "</div>" + "</li>");
      }
    };

    var count = $(".clickDesc").length;
    if (count === 10) {
      $(".exerciseList li:nth-child(5)").after("<p class='listBreak'>" + "Second Set:" + "</p>");
      $(".container").css("margin-bottom", "200px")
    }

      $(".clickDesc").click(function() {
        $(".timeDisplay").css("top", "7px");
      });

    // changes page layout on form submission and ideally fades the form out as well
      var numberReps = newWorkout.timeSelection();
      var numberSetsText = newWorkout.setsText();
      $.when($(".formBox").fadeOut(2000)).then(function() {
        $(".list").show();
        $(".col-md-4.second").addClass("col-md-8").removeClass("col-md-4");
        $(".col-md-8").append("<h3>Hey " + nameInput + ",<br> Here's your workout plan!</h3> <p>**Peform each exercise for <strong>20-seconds at high intensity</strong>, followed by a <strong>10-second rest</strong>.**</p> <p>For a " + timeInput + " minute workout:<br> <ul> <li class='instructions'>Perform each exercise in your first set " + numberReps + " times.</li>" + numberSetsText );
      });

    var equipString = equipmentInput.join(", ");

    // removes gymCard on mobile view

    if ($(window).width() < 401) {
      $(".gymCard").hide();
    } else {
      $(".gymCard").show();
      $(".jumbotron h1").css('padding-right', '250px');
    }

    // adds user data to gymCard

    $(".user-name").text(nameInput);
    $(".user-minutes").text(timeInput + "min, ");

    var muscleInputEdit = muscleInput.replace("-", " ");
    var muscleInputFirstLetter = muscleInputEdit.charAt(0).toUpperCase();
    var muscleInputSansFirstLetter = muscleInputEdit.slice(1);
    var finalMuscleInput = muscleInputFirstLetter + muscleInputSansFirstLetter;

    //adds dynamic workout title
    $(".workoutTitle").text(finalMuscleInput + " :");

    $(".user-focus").text(finalMuscleInput);
    $(".user-equipment").text(equipString);

    event.preventDefault();
  });
});
