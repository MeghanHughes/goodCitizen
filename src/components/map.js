const React = require('react')

module.exports = function (props) {
  const { name, quantity, price, store } = props

  return (
  <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBoco_6MRcLSc4Iy_CtyFQgM5xAmtBqDU"
            type="text/javascript"></script>
    {
      const marker;
      const infowindow;
      function initialize() {
        const latlng = new google.maps.LatLng(-41.28664, 174.77557);
        const options = {
          zoom: 15,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

      const map = new google.maps.Map(document.getElementById("map"), options);
      const html = "<table>" +
                 "<tr><td>Hazard type:</td> <td><select id='type'>" +
                 "<option value='pothole' SELECTED>pothole</option>" +
                 "<option value='graffiti'>graffiti</option>" +
                 "<option value='tree or plant'>tree or plant</option>" +
                 "<option value='pavement'>pavement</option>" +
                 "</select> </td></tr>" +
                 "<tr><td>Additional notes:</td> <td><input type='text' id='notes'/></td> </tr>" +
                 "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";
    infowindow = new google.maps.InfoWindow({
     content: html
    });
    google.maps.event.addListener(map, "click", function(event) {
        marker = new google.maps.Marker({
          position: event.latLng,
          map: map
        });
        google.maps.event.addListener(marker, "click", function() {
          infowindow.open(map, marker);
        });
    });
    }
    function saveData() {
      const name = escape(document.getElementById("name").value);
      const address = escape(document.getElementById("address").value);
      const type = document.getElementById("type").value;
      const latlng = marker.getPosition();
      const url = "phpsqlinfo_addrow.php?name=" + name + "&address=" + address +
                "&type=" + type + "&lat=" + latlng.lat() + "&lng=" + latlng.lng();
      downloadUrl(url, function(data, responseCode) {
        if (responseCode == 200 && data.length >= 1) {
          infowindow.close();
          document.getElementById("message").innerHTML = "Location added.";
        }
      });
    }
    function downloadUrl(url, callback) {
      const request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;
      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request.responseText, request.status);
        }
      };
      request.open('GET', url, true);
      request.send(null);
    }
    function doNothing() {}
    </script>
}

  )
}
