$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyD2HCMfPQWCbCcdkg3SBFlFz1A_gZd_G58",
    authDomain: "train-activity-basic-8b691.firebaseapp.com",
    databaseURL: "https://train-activity-basic-8b691.firebaseio.com",
    projectId: "train-activity-basic-8b691",
    storageBucket: "train-activity-basic-8b691.appspot.com",
    messagingSenderId: "76017870631"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var name = $("#trainName").val();
    var destination = $("#destination").val();
    var firstTrain = $("#startTrain").val();
    var frequency = $("frequency").val();
    var input = {
      inputName: name,
      inputDestination: destination,
      inputFirstTrain: firstTrain,
      inputFrequency: frequency
    };
    database.ref().push(input);

    $("#trainName").val("");
    $("#destination").val("");
    $("#startTime").val("");
    $("#frequency").val("");
  });

  database.ref().on("input", function(childSnapshot) {
    console.log(childSnapshot.val());
    var name = childSnapshot.val().inputName;
    var destination = childSnapshot.val().inputDestination;
    var firstTrain = childSnapshot.val().inputFirstTrain;
    var frequency = childSnapshot.val().inputFrequency;
  });
  var newRow = $("<tr>").append(
    $("<th>").text(name),
    $("<th>").text(destination),
    $("<th>").text(firstTrain),
    $("<th>").text(frequency)
  );
  $("#tbody").append(newRow);
});
