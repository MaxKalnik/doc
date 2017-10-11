$(document).ready(function () {
    var body = $('body');

    var allPanels = $('.main-nav__sub-list').hide();

    body.on('click', '.main-nav__link', function(event) {
      allPanels.slideUp();
      $(this).parent().find('.main-nav__sub-list').slideDown();
      return false;
    });

});

