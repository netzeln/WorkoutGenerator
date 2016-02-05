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
var pushUpStandard = new Exercise("Standard Pushup", "Place arms below shoulders in plank postition, lower your body, keeping core engaged and body in a straight line, push back up to plank.", "Upper Body", "none");

var squatStandard = new Exercise("Standard Squat", "Stand with feet shoulder width apart, lower your body like you're sitting into a chair, keeping your knees behind your toes. Return to standing.", "Lower Body", "none");

var highKneeStandard = new Exercise("High Knee", "Alternate raising knees to hip height.", "Lower Body", "none");

var highKneeFast = new Exercise ("Fast High Knee", "Run in place, raising knees to hip height, swinging arms.", "Cardio", "none");

var plankStandard = new Exercise("Plank", "Place arms slightly greater than shoulder width apart and toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged.", "Core", "none");

var plankElbow = new Exercise("Elbow Plank", "Bend arms and place elbows on the ground beneath shoulders and place toes on the ground. Hold position, keeping legs, torso and head aligned and core engaged.", "Core", "none")

var plankUpdown = new Exercise("Up-Downs", "Begin in Standard Plank position, lower yourself to Elbow Plank position, one arm at a time. Return to Standard Plank Position, one arm at a time. Repeat.", "Upper Body", "none");

var jumpingJackStandard = new Exercise("Standard Jumping Jack", "Do a Jumping Jack. Repeat.", "Cardio", "none");

var squatSplit = new Exercise("Split Squat", "Begin in a standing position. Jump into a split leg position, with one leg forward and one leg back, flexing the knees and lowering your hips slightly as you do so. As you descend, immediately reverse direction, standing back up and jumping, reversing the position of your legs. Repeat 5-10 times on each leg.", "Lower Body", "none");

var pushUpWide = new Exercise("Wide Push Up", "Place arms in line with shoulders, slightly wider than shoulder width apart, do a pushup.", "Upper Body", "none");

var lineJump = new Exercise("Line Jumps", "Jump across a line and back, keep feet together.", "Cardio", "none");

var crunchesStandard = new Exercise("Standard Crunches", "Do a sit-up.", "Core", "none");

var tricepDips = new Exercise("Tricep Dips", "Facing the ceiling, hands and feet flat on the ground (as if you were about to do a crab walk), extend one leg straight up into the air and dip by bending at the elbows. Alternate which leg is extended with each dip.", "Upper Body", "none");

var wallSit = new Exercise("Wall Sit", "Who needs a chair when there’s a wall? Slowly slide your back down a wall until the thighs are parallel to the ground. Make sure the knees are directly above the ankles and keep the back straight. Go for 60 seconds per set (or however long it takes to turn those legs to jelly). Need more fire? Add some bicep curls.", "Lower Body", "none");

var superman = new Exercise("Superman", "Want some superpowers? Lie face down with arms and legs extended. Keeping the torso as still as possible, simultaneously raise the arms and legs to form a small curve in the body. Cape optional.", "Core", "none");

var burpees = new Exercise("Burpees", "One of the most effective full-body exercises around, this one starts out in a low squat position with hands on the floor. Next, kick the feet back to a push-up position, complete one push-up, then immediately return the feet to the squat position. Leap up as high as possible before squatting and moving back into the push-up portion of the show.", "Cardio", "none");

var legCrunch = new Exercise("Raised Leg Crunches", "Lie on your back, raise straightened legs to 45-degrees, do a crunch.", "Core", "none");

var fastPunches = new Exercise("Fast Punches", "Lower into a squat position. Quickly alternate forward punches, turning torso to extend reach.", "Cardio", "none");

var squatJump = new Exercise("Squat Jump", "Perform a squat, at the top of the movement, Jump. Alternate Split Squats for extra challenge.", "Lower Body", "none");

var curtsyLunges = new Exercise("Curtsy Lunges", "Stand with your feet hip-width apart, hands on your hips. Shift your weight to your right side and step your left leg behind your right leg so your legs are crossed. If you imagine a clock underneath you, your left toes should be at roughly 4 o’clock. Bend both knees, not letting them come over your toes, and sink into the lunge, keeping your chest upright. Engage your quads and squeeze your glutes as you drive off your left leg, standing up and bringing it back to the starting position. Repeat on the other side, alternating sides for one minute.", "Lower Body", "none");

var squatPistol = new Exercise("Pistol Squat", "There may be no gun permit necessary for this one, but it’s still no joke. Stand holding the arms straight out in front of the body, and raise the right leg, flexing the right ankle and pushing the hips back. Then lower the body while keeping the right leg raised. Hold (have fun with that), then return to standing.", "Lower Body", "none");

var pushUpDiamond = new Exercise("Diamond Push Ups", "Jay-Z would approve. These push-ups get pimped out with a diamond-shaped hand position (situate them so that the thumbs and index fingers touch). This hand readjustment will give those triceps some extra (burning) love.", "Upper Body", "none");

var bicycleKick = new Exercise("Bicycle Kick", "Lie down with knees bent and hands behind the head. With the knees in toward the chest, bring the right elbow towards the left knee as the right leg straightens. Continue alternating sides (like you’re pedaling!).", "Core", "none");

var pushUpHandstand = new Exercise("Handstand Push Up", "Get set in a headstand position against a wall and bend the elbows at a 90-degree angle, doing an upside down push-up (so the head moves toward the floor and the legs remain against the wall). First timer? Grab a friend to spot you—safety first!", "Upper Body", "none");

var pushUpDolphin = new Exercise("Dolphin Push Up", "Start out in dolphin pose (think: down-dog with elbows on the floor). Lean forward, lowering the shoulders until the head is over the hands. Pull up the arms and return to the starting position. (No ocean necessary.)", "Upper Body", "none");

var buttKick = new Exercise("Butt Kick", "These will literally kick your butt—in a good way. Jog in place while kicking your heels back towards your glutes. Make sure the movement is being driven from your hamstrings (not just your feet kicking up dust). Keep it up for a minute straight while picking up the pace!", "Cardio", "none");

var mountainClimber = new Exercise("Mountain Climber", "We’re not going up any real mountains, but these are a close second. Start down on your hands and knees, and bring the right foot forward to the chest while the left leg remains straight. Engaging the core, quickly switch legs.", "Cardio", "none");

    // These exercises require a chair
var pushUpIncline = new Exercise("Incline Push-Ups", "Place both palms on the seat of the chair and walk your feet back to a plank position. Keeping your body in a straight line between the top of your head and your heels, bend your elbows and lower your body toward the seat. Pause, then push up through your palms to return to starting position. Repeat.", "Upper Body", "Chair");

var seatTaps = new Exercise("Seat Taps", "Stand facing the front of the chair. Simultaneously lift your right arm and tap the seat of the chair with your left toes. Immediately bring your left foot back down to the ground, and alternate sides so you lift your left arm and tap the seat with your right toes. Continue to alternate taps as quickly as possible, using your arms for momentum and balance.", "Cardio", "Chair");

var seatedKneeLifts = new Exercise("Seated Knee Lifts", "Sit on edge of chair, knees bent, feet flat. Grasp sides of chair, lean back slightly. Pull knees toward chest as you crunch upper body forward using abs, not arms. Lower feet almost to floor, but don't let them touch until the end of the set.", "Core", "Chair");

var chairDips= new Exercise("Chair Dips", "Facing the ceiling, hands holding sides of the chair and feet flat on the ground, dip by bending at the elbows.", "Upper Body", "Chair");

var plankKneeCross = new Exercise("Plank Knee Cross", "Place both forearms on the seat of the chair and step your feet back into a plank position. Keeping your hips low and core tight, bring your right knee to the inside of your left arm. Pause, then return to start and repeat on the opposite leg, this time touching your left knee to the inside of your right arm.", "Core", "Chair");

var quadricepsContractions = new Exercise("Quad Contractions", "Sit on the edge of chair with your legs straight in front of you and your heels on the floor. Tighten your legs and hold.", "Lower Body", "Chair");

    // These exercises require a resistance band
var squatFront = new Exercise ("Front Squat with Band", "Stand on band with feet slightly wider than shoulder width. Holding a handle in each hand, bring the top of the band over each shoulder. (If it's too long, secure band in place by crossing your arms at your chest.) Sit straight down, chest up, abs firm, pressing knees out over your toes.", "Lower Body", "Resistance Band");

var lateralBandWalk = new Exercise("Lateral Band Walk", "Don’t sidestep these side steps! Step into a loop band or tie a therapy band around the lower legs, just above both ankles. Place feet shoulder-width apart to create tension on the band. From a half-squat position, shift your weight to the left side, stepping sideways with the right leg. Move the standing leg slightly in, but keep the band taut. Take 8 to 10 steps before heading back the other way.", "Lower Body", "Resistance Band");

var woodChopper = new Exercise("Wood Chopper", "Attach band to a fixed point at chest level. Stand perpendicular to the point, extend arms outward to hold the end of the band. Keeping arms straight, twist torso, stretching the band.", "Core", "Resistance Band");

var bicepsCurl = new Exercise("Biceps Curl", "Stand with feet shoulder-width apart with your feet placed over the middle of the band. Grab a handle in each hand, starting with your arms down at your sides. With palms facing in front of you, pull your arms toward your shoulders by bending at the elbow until you get a good bicep contraction. Slowly lower back down and repeat.", "Upper Body", "Resistance Band");

var tricepsKickback = new Exercise("Triceps Kickback", "Kick back and relax. Just kidding! Stand in a forward lunge position with your right foot in front, positioned over the center of the band. Holding each end of the band, position your arms at your sides with palms facing behind you. Bend at the elbows (keeping them tucked by your sides) until your forearms are parallel to the floor. Next, press down the arms, pushing the band behind your body until the arms fully extend. Lower back down and repeat.", "Upper Body", "Resistance Band");

    // These exercises require free weights
var hammerCurl = new Exercise("Hammer Curl", "Stand with the feet shoulder width apart, knees slightly bent and back straight. Hold a dumbbell in each hand with the palms facing in, towards each other and elbows straight. Keep your upper arms still as you bend the elbows to lift the weights from your sides up towards your shoulders. Be careful not to arch your back or swing the weights. Slowly return the weights back to the starting position.", "Upper Body", "Weights");

var squatPress = new Exercise("Squat Press", "Holding weights at shoulder height, perform a squat. At top of squat, extend arms upward with weights.", "Lower Body", "Weights")

var russianTwist = new Exercise("Russian Twist", "Sit on the floor with your feet in the air and knees bent, holding a dumbbell in both hands in front of your sternum. Keeping your core braced and arms straight, rotate to one side. Then twist the other way. Return to the start again to complete one rep.", "Core", "Weights");

var getUpSitUp = new Exercise("Get Up Sit Up", "Lie on your back on the floor, squeezing a dumbbell between your feet and holding another one over your chest. Keeping the tension in your legs, perform a situp, moving the weight directly overhead.", "Core", "Weights");

var renegadeRow = new Exercise("Renegade Row", "With a dumbbell in each hand, get into pushup position with your feet wide. Shift your weight to your left side and row the right-hand dumbbell to your side. Repeat on the opposite side.", "Upper Body", "Weights");

//pseudo database arrays
var equipmentExercises = [pushUpIncline, hammerCurl, squatFront, lateralBandWalk, seatedKneeLifts, russianTwist, seatTaps, woodChopper, squatPress, chairDips, getUpSitUp, renegadeRow, plankKneeCross, quadricepsContractions, bicepsCurl, tricepsKickback];

var upperBody = [pushUpStandard, plankUpdown, pushUpWide, tricepDips, pushUpDiamond, pushUpHandstand, pushUpDiamond];
var lowerBody = [squatStandard, squatSplit, highKneeStandard, wallSit, squatJump, curtsyLunges, squatPistol];
var core = [plankStandard, plankElbow, crunchesStandard, superman, legCrunch, bicycleKick];
var cardio = [highKneeFast, jumpingJackStandard, lineJump, burpees, fastPunches, buttKick, mountainClimber];

var exerciseCategories = [cardio, lowerBody, upperBody, cardio, core];
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
        if(newWorkoutList[i].neededEquipment !== "none"){
          $(".exerciseList").append("<li class='clickDesc equipment' data-toggle='collapse' data-target='#collapse" + randomId +"'>" + newWorkoutList[i].nameExercise + "<span class='timeDisplay'>" + "<p>" + "20s" + "</p>" + "</span>" + "<div class='collapse' id='collapse" + randomId + "'>" + "<p class='workoutSummary'>" +  newWorkoutList[i].descriptionExercise + "</p>" + "</div>" + "</li>");
        } else {
          $(".exerciseList").append("<li class='clickDesc' data-toggle='collapse' data-target='#collapse" + randomId +"'>" + newWorkoutList[i].nameExercise + "<span class='timeDisplay'>" + "<p>" + "20s" + "</p>" + "</span>" + "<div class='collapse' id='collapse" + randomId + "'>" + "<p class='workoutSummary'>" +  newWorkoutList[i].descriptionExercise + "</p>" + "</div>" + "</li>");
        }
      }
    };

    //stops multiple items from expanding simultaneouslys
    $(".clickDesc").click(function() {
          $(".clickDesc").find('.collapse.in').collapse('hide');
    });

    var count = $(".clickDesc").length;
    if (count === 10) {
      $(".exerciseList li:nth-child(5)").after("<p class='listBreak'>" + "Second Set:" + "</p>");
    }

    $(".clickDesc").click(function() {
      $(".timeDisplay").css("top", "7px");
    });

    // changes page layout on form submission and ideally fades the form out as well
    var numberReps = newWorkout.timeSelection();
    var numberSetsText = newWorkout.setsText();
    $.when($(".formBox").fadeOut(1000)).then(function() {
      $(".list").fadeIn(1000);
      $(".col-md-4.second").addClass("col-md-8").removeClass("col-md-4");

      $(".col-md-8").append("<p><h3>Hey <span class= 'fancyName'>" + nameInput + "</span>,</h3></p><h3> Here's your workout plan!</h3></p><h3>Do exercise for <strong>20 seconds</strong> at high intensity, followed by <strong>10 seconds</strong> of rest.</h3><p><span class= 'highlight'>Highlighted exercises</span> require equipment!<p>For a " + timeInput + " minute workout follow this pattern:<br> <ul class= 'listBuddy'> <li class='instructions'>Perform each exercise in your first set " + numberReps + " times.</li>" + numberSetsText + "<center><div><span class='btn btn-timer' onclick=$('#showable').toggle()>START</span><div><br> <img class='img-responsive' id='showable' src='img/countdown-infinite.gif'></div></center>"
      );
    });

    var equipString = equipmentInput.join(", ");

    // removes gymCard on mobile view
    $(window).on('resize', function() {
      if ($(window).width() < 1024) {
        $(".gymCard").hide();
        $(".jumbotron h1").css('padding-right', '0px');
      } else {
        $(".gymCard").show();
        $(".jumbotron h1").css('padding-right', '250px');
      }
    }).trigger('resize');


    // adds user data to gymCard

    $(".user-name").text(nameInput);
    $(".user-minutes").text(timeInput + "min, ");

    var muscleInputEdit = muscleInput.replace("-", " ");
    var muscleInputFirstLetter = muscleInputEdit.charAt(0).toUpperCase();
    var muscleInputSansFirstLetter = muscleInputEdit.slice(1);
    var finalMuscleInput = muscleInputFirstLetter + muscleInputSansFirstLetter;

    //adds dynamic workout title
    $(".workoutTitle").text(finalMuscleInput + " :");

    if ($(window).width() < 401) {
      $(".gymCard").hide();
    } else {
      $(".gymCard").show();
      $(".jumbotron h1").css('padding-right', '250px');
    }

    $(".user-focus").text(finalMuscleInput);
    $(".user-equipment").text(equipString);

    event.preventDefault();
  });
});
