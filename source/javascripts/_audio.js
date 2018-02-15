// https://codepen.io/selvamprakasam/pen/pRYPMG?limit=all&page=5&q=play+list
jQuery(function ($) {
 audioPlayer();
  function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
     $("#audioPlayer")[0].play();
    // do an action when clik the playlist
    $("#playlist li a").click(function(e){
      e.preventDefault(); 
      $("#audioPlayer")[0].src = this;
      $("#audioPlayer")[0].play();
      $("#playlist li").removeClass("current-song");
       currentSong = $(this).parent().index();
       $(this).parent.addClass("current-song");

    });
  }
});



