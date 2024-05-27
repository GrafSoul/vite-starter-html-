import "../styles/main.scss";

// ========================================================================================
// Preloader
// ========================================================================================
$(window).on("load", function () {
  var $preloader = $(".preloader-pages"),
    $spinner = $preloader.find(".preloader-pages__dynamic-element");
  $spinner.fadeOut();
  $preloader.delay(350).fadeOut("slow");
});

// ========================================================================================
// Scripts for Site
// ========================================================================================
$(document).ready(function () {});
