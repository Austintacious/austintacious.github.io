$(document).ready(function(){
  transformicons.add('.tcon');
  $('#card2 #floater, #card4 #floater, #card1 #posts, #card3 #bookshelf, #card4 #floater #links').hide();

  $('#navLink').on('click', function(){
    $('#card2 #floater, #card4 #floater, #card1 #posts, #card3 #bookshelf').fadeToggle(1000, function(){});
  });

  $('#card4 #floater').click(function(){
    if ($(this).find('#blurb').is(':visible')) {
      $(this).find('#blurb').fadeToggle(1000, function(){});
      $(this).find('#ohu').fadeToggle(1000, function(){});
      $(this).find('#links').delay(1000).fadeToggle(1000, function(){});
    } else {
      $(this).find('#links').fadeToggle(1000, function(){});
      $(this).find('#blurb').delay(1000).fadeToggle(1000, function(){});
      $(this).find('#ohu').delay(1000).fadeToggle(1000, function(){});
    }
  });
});
