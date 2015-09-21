$(document).ready(function(){
  transformicons.add('.tcon');
  $('#card2 #floater, #card4 #floater, #card1 #posts, #card3 #bookshelf').hide();

  $('#navLink').on('click', function(){
    $('#card2 #floater, #card4 #floater, #card1 #posts, #card3 #bookshelf').fadeToggle(1000, function(){});
  });

  $('.switch-blurbs').click(function(){
    $('#card2 #floater #blurb, #card4 #floater #blurb').fadeToggle(1000, function(){});
    $('#posts, #card4 #posts, #bookshelf, #card4 #bookshelf').fadeToggle(1000, function(){});
  });
});
