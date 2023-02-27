$(document).ready(function () {
  let deskTopSize = window.matchMedia("(max-width: 375px)");
  if (deskTopSize.matches) {
    $(".bg").hide();
    $(".menu").hide();
    $(".menu-icon1").click(function () {
      $(".bg").toggle(500);
      $(".menu").toggle(300);
      $(".a").toggle(100);
      $(".b").toggle(100);
      $(".v").toggle(100);
      $(".g").toggle(100);
      $(".d1").toggle(100);
    });
    $(".menu-icon").click(function () {
      $(".bg").toggle(500);
      $(".menu").toggle(300);
      $(".a").toggle(100);
      $(".b").toggle(100);
      $(".v").toggle(100);
      $(".g").toggle(100);
      $(".d1").toggle(100);
    });
  }
});
