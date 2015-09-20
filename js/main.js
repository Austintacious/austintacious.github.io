$(document).ready(function(){
  // $('#fullpage').fullpage({
  //   autoScrolling: false
  // });
  $('#floater').hide();
  $('#floater #links').hide();

  document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
    if ($(this).hasClass('active')) {
      $('#floater').fadeIn(1000, function(){});  
    } else {
      $('#floater').fadeOut(1000, function(){});
    }
  });

  $('#switch-blurbs').click(function(){
    $('#floater #blurb').fadeToggle(1000, function(){});
    $('#floater #links').fadeToggle(1000, function(){});
  });
});
