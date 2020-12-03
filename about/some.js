  function centerify(obje) {
  $ww = $(window).width();
  $wh = $(window).height();
  $ow = obje.outerWidth();
  $oh = obje.outerHeight();
  
  obje.css('left', ($ww - $ow) / 2);
  obje.css('top', ($wh - $oh) / 2);
}

centerify($('.load .in-wrap'));
$(window).resize(function() {
  centerify($('.load .in-wrap'));
});
$('.navi li a').click(function(e) {
  e.preventDefault();
  $id = $(this).attr('id');
  
  $('.navi li a').removeClass('active');
  $(this).addClass('active');
  
  $('.load').slideDown('slow');
  $('.load .in-wrap .sq').addClass('animate');

  setTimeout(function() {
    $('.load .in-wrap .sq').addClass('white');
  }, 500);
  setTimeout(function() {
    
    $('.page').removeClass('active');
    $('.' + $id).addClass('active');
    
    $('.load').slideUp('slow');
  }, 1000);
  
  setTimeout(function() {
    $('.load .in-wrap .sq').removeClass('animate');
    $('.load .in-wrap .sq').removeClass('white');
  }, 1700);
  
 
});