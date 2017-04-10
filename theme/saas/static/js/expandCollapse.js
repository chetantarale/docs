$(document).ready(function () {
  if ($.cookie('selectedMenuId')) {
    var selectedId = $.cookie('selectedMenuId');
    $('#' + selectedId).addClass('active');
    $.removeCookie('selectedMenuId');
  }

  if ($.cookie('currentSection')) {
    var selectedId = $.cookie('currentSection');
    $('ul.indiviualSection').addClass('hidesection');
    $('ul#' + selectedId).removeClass('hidesection')
    $.removeCookie('currentSection');
  } else {
    $('ul.indiviualSection').addClass('hidesection');
    $('ul.indiviualSection').eq(0).removeClass('hidesection')
  }

  $('.shipNav-item').click(
    function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $('.shipNav-item').removeClass('active');
        $(this).addClass('active');
        $.cookie('selectedMenuId', $(this).attr('id'),
          {expires: 90, path: '/'}
        );
      }
    }
  );

  $('.topPanel').click(
    function () {
      var currentSection = $.cookie('currentSection',
        $(this).attr('id'), {expires: 90, path: '/'});
    }
  );

});
