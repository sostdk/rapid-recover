

$(document).ready(function(){
	$('.collapsible').collapsible();

  $('.scrollspy').scrollSpy();

  $('.carousel').carousel();

	$('.parallax').parallax();

  $('.button-collapse').sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
      onOpen: function(el) {  },
      onClose: function(el) {  },
    }
  );

	$('.collapsible li').on('click', function(){
	  $(this).toggleClass('opened');
	})

  $(function() {
      //caches a jQuery object containing the header element
      var header = $("header");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 200) {
              header.removeClass('clearHeader').addClass("background");
          } else {
              header.removeClass("background").addClass('clearHeader');
          }
      });
  });

});



  $(function() {

    var chicago = new google.maps.LatLng(41.924832, -87.697456),
        pointToMoveTo,
        first = true,
        curMarker = new google.maps.Marker({}),
        $el;

    var myOptions = {
        zoom: 10,
        center: chicago,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map($("#map_canvas")[0], myOptions);

    $("#locations li").click(function() {

      $el = $(this);

      if (!$el.hasClass("hover")) {

        $("#locations li").removeClass("hover");
        $el.addClass("hover");

        if (!first) {

          // Clear current marker
          curMarker.setMap();

          // Set zoom back to Chicago level
          // map.setZoom(10);
        }

        // Move (pan) map to new location
        pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
        map.panTo(pointToMoveTo);

        // Add new marker
        curMarker = new google.maps.Marker({
            position: pointToMoveTo,
            map: map,
            icon: "assets/map/images/marker.png"
        });

        // On click, zoom map
        google.maps.event.addListener(curMarker, 'click', function() {
           map.setZoom(20);
        });
        // No longer the first time through (re: marker clearing)
        first = false;
      }

    });

    $("#locations li:first").trigger("click");

  });


	/*ANALYTICS*/

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-103226387-1', 'auto');
	  ga('send', 'pageview');
