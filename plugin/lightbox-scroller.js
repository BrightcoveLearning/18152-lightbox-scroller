videojs.registerPlugin('pluginName', function() {
    var myPlayer = this,
        playlistData;

    var buildPlaylistData = function () {
      // Build the scroller of video thumbnails and names
      var str = "";
      for (var i in playlistData) {
        str += "<div id='scroller-item'><img id='" + i + "'src='" +
          playlistData[i].poster + "' /><div class=\"scroller-caption\"><span>" +
          playlistData[i].name + "</span></div></div>";
      }
      document.getElementById("scroller").innerHTML = str;
    };

    scroller.onclick = function(e) {
      // Load the selected video
      var j = parseInt(e.target.id);
      myPlayer.playlist.currentItem(j);
      // Reveal the lightbox
      document.getElementById("playerLightbox").className = "playerShow";

      // Play the video
      myPlayer.play();
    }

    playerClose.onclick = function(e) {
      myPlayer.pause();
      // Hide the lightbox
      document.getElementById("playerLightbox").className = "playerHide";
    }

    videojs("myPlayerID").ready(function(){
      myPlayer = this;

      myPlayer.one('loadedmetadata', function() {
         playlistData = myPlayer.playlist();
         buildPlaylistData();
      })

    });

});
