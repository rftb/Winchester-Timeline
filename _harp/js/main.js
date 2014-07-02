jQuery( document ).ready(function($) {
  $('ol.timeline').find('a').on('click', function(e){
    e.preventDefault();
    $('ol.timeline').find('a').removeClass('active');
    $(this).addClass('active');
    $( "#details" ).load( $(this).attr('href'), function() {
      console.log('ok');
    });
  });
});