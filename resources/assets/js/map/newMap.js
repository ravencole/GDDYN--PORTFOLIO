var beaches;
var imageHeight = window.innerHeight,
        imageWidth  = imageHeight * 6 / 4.5,
        mapWidth    = window.innerWidth - imageWidth;

function initMap() {
  var richmondMapType = new google.maps.StyledMapType([
        {
            "featureType":"administrative",
            "elementType":"labels.text.fill",
            "stylers":[{ "color":"#444444" }]
        },
        {
            "featureType":"landscape",
            "elementType":"all",
            "stylers":[{ "color":"#f2f2f2" }]
        },
        {
            "featureType":"poi",
            "elementType":"all",
            "stylers":[{ "visibility":"off" }]
        },
        {
            "featureType":"road",
            "elementType":"all",
            "stylers":[{ "saturation":-100 }, { "lightness":45 }]
        },
        {
            "featureType":"road.highway",
            "elementType":"all",
            "stylers":[{ "visibility":"simplified" }]
        },
        {
            "featureType":"road.arterial",
            "elementType":"labels.icon",
            "stylers":[{ "visibility":"off" }]
        },
        { 
            "featureType":"transit",
            "elementType":"all",
            "stylers":[{ "visibility":"off" }]
        },
        {
            "featureType":"water",
            "elementType":"all",
            "stylers":[{ "color": "#ffffff" }, { "visibility":"on" }]
            // #4f595d
        },
        {
            "name": "Richmond Style" 
        }
    ]);

    var customMapTypeId = 'richmond_style';

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.586275, lng: -76.947198}, 
        zoom: 10,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, richmondMapType);
    map.setMapTypeId(customMapTypeId);
  $.getJSON("/alley",
    function(data) { 
      var infoBoxHeight = window.innerHeight;
      beaches = data; 
      console.log(beaches);
      setMarkers(map);
      $('#map').css({ 'width': mapWidth, 'height': window.innerHeight - 75 + 'px'});
      $('#infoBox').css({ 'width': mapWidth, 'height': infoBoxHeight - (infoBoxHeight - 50) + 'px'});
    }
  );  
}

function setMarkers(map) {
  var image = {
    url: '/images/map_icons/mapsMarker-unvisited.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    image.url = '/images/map_icons/mapsMarker-unvisited.png';
    var pic = beaches[i];

    pic["latitude"] = Number(pic["latitude"]);
    pic["longitude"] = Number(pic["longitude"]);
    var marker = new google.maps.Marker({
      position: {lat: pic["latitude"], lng: pic["longitude"]},
      map: map,
      icon: image,
      shape: shape,
      id: pic["id"],
    });

    var previousMarker;
    google.maps.event.addListener(marker,'click', (function(marker){ 
        return function() {
          if (previousMarker) {
            image["url"] = '/images/map_icons/mapsMarker-current.png';
            previousMarker.setIcon(image);
          }
          buildInfoBox(marker["id"]);
          image["url"] = '/images/map_icons/mapsMarker-visited.png';
          marker.setIcon(image);
          previousMarker = marker;
        };
    })(marker));
    
    function buildInfoBox( id ) {
      for (var i = beaches.length - 1; i >= 0; i--) {
        if (beaches[i]["id"] === id) {
          var currentMarker = beaches[i];

        }
      };
      var backgroundImageUrl = '/images/alley_images/' + currentMarker["name"];
      $('.image--box').css({
        'height': imageHeight + 'px',
        'width': imageWidth  + 'px',
        'background-image': 'url("' + backgroundImageUrl + '")'
      });

      var time = new formatTime( currentMarker["time"] );
      time.formatHour();
      time.formatAmPm();
      var currentMarkerTime = time.getTime();
      $("#infoBoxDate").text(formatDate(currentMarker["date"]));
      $("#infoBoxTime").text(currentMarkerTime["hour"] + ':' + currentMarkerTime["minute"] + ' ' + currentMarkerTime["amPm"]);
      $("#infoBoxLat").text(currentMarker["latitude"]);
      $("#infoBoxLon").text(currentMarker["longitude"]);
    }
  }
}

var imageInfoBoxClosed = true;
$('#infoBox').on('click', function() {
  console.log(imageInfoBoxClosed);
  if (imageInfoBoxClosed) {
    $('#map').css({'height': window.innerHeight - 200 + 'px'});
    $('#infoBox').css({'height': window.innerHeight - (window.innerHeight - 175) + 'px'});
    $('.info--arrow').css({'top': '15%'});
    $('.info--arrow__left').css({'transform': 'rotate(25deg)'});
    $('.info--arrow__right').css({'transform': 'rotate(-25deg)'});
    $('.info--box__info').css({'display': 'flex'});
    imageInfoBoxClosed = false;
  } else {
    $('#map').css({'height': window.innerHeight - 75 + 'px'});
    $('#infoBox').css({'height': window.innerHeight - (window.innerHeight - 50) + 'px'});
    $('.info--arrow').css({'top': '50%'});
    $('.info--arrow__right').css({'transform': 'rotate(25deg)'});
    $('.info--arrow__left').css({'transform': 'rotate(-25deg)'});
    $('.info--box__info').css({'display': 'none'});
    imageInfoBoxClosed = true;
  }
});


















