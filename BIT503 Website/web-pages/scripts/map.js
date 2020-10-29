        function initMap() {
        var op = {lat: -45.0302, lng: 168.6616};
        var c = {lat: -43.5320, lng: 172.6397};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: c
        });
        var marker = new google.maps.Marker({
          position: op,
          map: map
        });
      }


