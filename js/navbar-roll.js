$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $(".navbar-bg").addClass("navbar-white");
      $(".item-menu").addClass("item-menu-azul");
      $("#logosmall").attr("src", "img/logosmallazul.png");
    } else {
      $(".navbar-bg").removeClass("navbar-white");
       $(".item-menu").removeClass("item-menu-azul");
       $("#logosmall").attr("src", "img/logosmall.png");
    }
  });
});