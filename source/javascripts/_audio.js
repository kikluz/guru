// https://github.com/TechTube/HTML5AudioPlaylist/blob/master/audioPlayer.js
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
      $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
      currentSong++;
      if(currentSong == $("#playlist li a").length)
        currentSong = 0;
      $("#playlist li").removeClass("current-song");
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
      $("#audioPlayer")[0].play();
    });
  }
});



