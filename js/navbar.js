// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

  // ==========================================================================
  //	Main  Navigation
  // ==========================================================================
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("nav-stick");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  // ==========================================================================


}); // end document.ready