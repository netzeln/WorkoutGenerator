describe("Exercises", function() {
  it("will input the available time and equipment and output an exercise", function() {
    var testExercise = new Exercise("Chair");
    expect(testExercise.exerciseChooser()).to.equal("Chair step-up");
  });
  it("will input the user's regimen choice and reveal the exercise description", function() {
    var newWorkout = new newExercise("Standard Push-up");
    expect(newWorkout.?????()).to.eql(["Places arms below shoulders in plank position, lower your body, keeping core engaged and body in a straight line, push back up to plank"]);
  });
});

describe("Workout", function() {
  it("will input the user's name and greet them with said name", function() {
    var newWorkout = new Workout("Torrence");
    expect(newWorkout.userName).to.equal("Torrence");
  });

  it("will input available time and output number of exercises", function() {
    var newWorkout = new Workout(10);
    expect(newWorkout.????()).to.equal(5);
  });
  it("will input level of difficulty and output a matching regimen", function() {
    var newWorkout = new Workout("Advanced");
    expect(newWorkout.????()).to.eql(["Triceps dip", "Push-up and rotation", "Side plank"]);
  });

  it("will input the user's desired workout focus and output a relevant regimen", function() {
    var newWorkout = new Workout("Core");
    expect(newWorkout.?????()).to.eql(["Chair step-up", "Squat", "Tree Pose"]);
  });
});
