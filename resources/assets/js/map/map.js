var map;
var alleyPics;

var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
};

$.getJSON("/alley",
  function(data) {
    alleyPics = data;  
    setMarkers(map);       
});  
    
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
        center: {lat: 37.558588, lng: -77.476961}, 
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, richmondMapType);
    map.setMapTypeId(customMapTypeId);

}

function setMarkers(map) {
  var image = {
    url: '',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };
  
  var randomIcon = function() {
    var random = Math.floor((Math.random() * 10) + 1);
    return '/images/map_icons/icon' + random + '.png';
  };
  
  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < alleyPics.length; i++) {
    image.url = randomIcon();
    var pic = alleyPics[i];

    
    var content = 
      '<div id="iw-container">' +
        '<img width="300px" src="/images/alley_images/' + pic["name"] + '">' +
      '</div>'
    ;

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
    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
          if (previousMarker) {
            var reVisited = /active/; 
            var strVisited = previousMarker['icon']['url'];
            var substVisited = 'visited'; 
 
            image["url"] = strVisited.replace(reVisited, substVisited);
            previousMarker.setIcon(image);
          }
          buildInfoBox(marker["id"]);
          var reClicked = /((icon\d\d?)([^\.]?)+)/; 
          var strClicked = marker['icon']['url'];
          var substClicked = '$2-active'; 
          
          image["url"] = strClicked.replace(reClicked, substClicked);
          marker.setIcon(image);
          previousMarker = marker;
        };
    })(marker,content,infowindow));
    var imageHeight = window.innerHeight;
        imageWidth  = imageHeight * 6 / 4.5;

    function buildInfoBox( id ) {
      for (var i = alleyPics.length - 1; i >= 0; i--) {
        if (alleyPics[i]["id"] === id) {
          var currentMarker = alleyPics[i];
        }
      };

      var time = new dumbTime( currentMarker["time"] );
      time.formatHour();
      time.formatAmPm();
      var sleepyTime = time.getTime();

      var backgroundImageUrl = '/images/alley_images/' + currentMarker["name"];
      $('#image-box').css({
        'height': imageHeight,
        'width': imageWidth,
        'background-image': 'url("' + backgroundImageUrl + '")'
      });
      $('#image-box').empty().append(

        '<div class="image-box-info">'+
          '<div class="info-subject">' + currentMarker["latitude"] + '</div>' +
          '<div class="info-subject">' + currentMarker["longitude"] + '</div>' +
          '<div class="info-subject">' + formatDate( currentMarker["date"] ) + '</div>' +
          '<div class="info-subject">' + sleepyTime["hour"]+ ':' + sleepyTime["minute"] + ' ' + sleepyTime["amPm"] + '</div>' +
        '</div>'

      );
    }
  }
}

$('#image-box').hover(function() {
    $('.image-box-info').fadeIn(250).css('display', 'flex');
  }, function() {
    $('.image-box-info').fadeOut(250);
});
















