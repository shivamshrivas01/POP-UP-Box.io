$(document).ready(() => {
  $(".clickme").on("click", function () {
    $("#signupbox").toggleClass("appear");
  });
  $("#cancel-button").on("click", function () {
    $("#signupbox").removeClass("appear");
    $("#signupbox").addClass("disappear");
  });
});
