$(document).ready(function(){
  // $('#fullpage').fullpage({
  //   autoScrolling: false
  // });
  document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
    $("#navLinks").toggleClass('in');
  });
});
