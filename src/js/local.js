/**
 * Created by sergeybytchok on 2/24/17.
 */
$(document).ready(function () {
    var body = $('body');

    body.on('click', '.region-list__link', function(event) {
      event.preventDefault();
      var scroll_el = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
      return false;
    });

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });

            /*$('.top-menu__wrap.open').on('click', function(){
             $('.top-menu__wrap').removeClass('open');
             return false
             })*/
        }

    }

    body.on('click', '.js-table', function(event){
      event.preventDefault();
      body.append($(this).parents('.overflow-table'));
      $('html, body').scrollTop(0);
      $('.page__wrap').hide();
      $('.overflow-table').addClass('show');
      return false

    });

    body.on('click', '.mobile-only-close', function(event) {
      event.preventDefault();
      var parent = $(this).attr('href');
      var currentTable = $(this).parents('.overflow-table');
      $('.overflow-table').removeClass('show');
      $(parent).find('.region-features').after($(currentTable));
      $('.page__wrap').show();
      $('html, body').animate({ scrollTop: $(currentTable).position().top }, 500);
      return false
    });

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });

    body.on('click', '.table-switcher__btn--international', function() {
      $('.table-switcher__btn').removeClass('table-switcher__btn--active');
      $(this).addClass('table-switcher__btn--active');
      $(this).parents('.table-switcher').addClass('table-switcher--international');
      $(this).parents('.region-info').find('.region-info__table-wrap').addClass('region-info__table-wrap--international');
    });


    body.on('click', '.table-switcher__btn--domestic', function() {
      $('.table-switcher__btn').removeClass('table-switcher__btn--active');
      $(this).addClass('table-switcher__btn--active');
      $(this).parents('.table-switcher').removeClass('table-switcher--international');
      $(this).parents('.region-info').find('.region-info__table-wrap').removeClass('region-info__table-wrap--international');
    });

    body.on('click', '.table-switcher__toggle-btn', function() {
      if($(this).parents('.region-info').find('.region-info__table-wrap').hasClass('region-info__table-wrap--international')) {
        $(this).parents('.region-info').find('.region-info__table-wrap').removeClass('region-info__table-wrap--international');
        $(this).parents('.table-switcher').removeClass('table-switcher--international');
        $(this).siblings('.table-switcher__btn--domestic').addClass('table-switcher__btn--active');
      }
      else {
        $(this).parents('.region-info').find('.region-info__table-wrap').addClass('region-info__table-wrap--international');
        $(this).siblings().removeClass('table-switcher__btn--active');
        $(this).parents('.table-switcher').addClass('table-switcher--international');
      }
    });

});
    $(function() {

      $("tr").swipe( {

        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
          $(this).parents('.region-info__table-wrap').addClass('region-info__table-wrap--international');
          $(this).parents('.region-info').find('.table-switcher').addClass('table-switcher--international');
        },

        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
          $(this).parents('.region-info__table-wrap').removeClass('region-info__table-wrap--international');
          $(this).parents('.region-info').find('.table-switcher').removeClass('table-switcher--international');
        },

         threshold: 15
      });
    });

