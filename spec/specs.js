describe('Exercise', function(){
  it("stores information about different exercises", function(){
    var testExercise = new Exercise("Test Exercise", "This tests your exercises", "Cardio");
    expect(testExercise.nameExercise).to.equal("Test Exercise");
    expect(testExercise.descriptionExercise).to.equal("This tests your exercises");
    expect(testExercise.bodyPart).to.equal("Cardio");

  });
});
