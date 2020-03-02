$(document).ready(function () {

  $("li").click(function () {

    if ($(this).children(".dropdown").is(":visible")) {
      $(this).children(".dropdown").slideToggle(100);
    } else {
      $('li').children('.dropdown').slideUp(100);
      $(this).children('.dropdown').slideToggle(100);
    }
  });

  $(".fa-bars").click(function () {
    $(".menu").slideDown(500);
  });
  $(".fa-times").click(function () {
    $(".menu").slideUp(500);
  });










});
