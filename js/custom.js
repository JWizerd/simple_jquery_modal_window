// to use feature simply:
// 1. assign #modal-init to an element / trigger (preferably a button for click)
// 2. assign #modal to div / content area of modal window that will be appended.
// 3. for closing modal window assign #close to a button (preferably on modal window)

$("#modal-init").click(function(){
  // get the window height and width for modal trajectory path
  var windowH = $(window).height();
  var windowW = $(window).width();

  // set modal window to center
  modal = $("#modal");

  modal.css('top', windowH/2-modal.height()/2);
  modal.css('left', windowW/2-modal.width()/2);

  //fade in
  modal.fadeIn(500);

});

// to close the window
$('.modal-window #close').click(function(){

  $(".modal-window").fadeOut(500);
});