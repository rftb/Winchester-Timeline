jQuery( document ).ready(function($) {
  $('ol.timeline').find('a').on('click', function(e){
    e.preventDefault();
    $( "#details" ).load( $(this).attr('href'), function() {
      console.log('ok');
    });
  });
});