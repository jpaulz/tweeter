$(document).ready(function() {

  $('.new-tweet textarea').on('keyup', function(event) {
    let a = $(this).val();
    $(".counter").text(140 - a.length);
    if (a.length > 140) {
      // console.log($(this));
      $(".counter").css("color", "#ed2a07");
    } else {
      $(".counter").css("color", "#545149");
    }
  });
});

