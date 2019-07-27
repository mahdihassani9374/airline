$(function () {
  new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
})