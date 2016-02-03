describe('Exercise', function(){
  it("stores information about different exercises", function(){
    var testExercise = new Exercise("Test Exercise", "This tests your exercises", "Cardio");
    expect(testExercise.nameExercise).to.equal("Test Exercise");
    expect(testExercise.descriptionExercise).to.equal("This tests your exercises");
    expect(testExercise.bodyPart).to.equal("Cardio");
  });
});

describe("Workout", function() {
  it("will create an object constructor for Workout", function(){
    var testWorkout = new Workout ("[]");
    expect(testWorkout.chosenExercises).to.eql([]);
  });

  it("will randomly select exercise from different categories and push to array for user display", function(){
    var testWorkout = new Workout();
    var testExercise = new Exercise("kick")
    testWorkout.exercisePusher(testExercise);
    expect(testWorkout.chosenExercises).to.be.an('array');
  });

  it("will push exercises based on equipment needed/available", function(){
    var testWorkout = new Workout("Upper Body", ["Weights"]);
    var testExercise = new Exercise("Test Exercise", "Description", "Cardio", "Weights");
    var equipmentExercisesFiltered = [];
    testWorkout.equipmentFilterer(testExercise);
    expect(equipmentExercisesFiltered).to.be.an('array');
  });
});
