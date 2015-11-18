function formatDate(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];e=e.split(":");var i={year:e[0],month:e[1],day:e[2]},o=/0(\d)/;return o.test(i.month)&&(i.month=i.month.replace(o,"$1")),Number(i.month),i.month=t[i.month-1],i.month+" "+i.day+", "+i.year}function formatTime(e){this.time=e;var t=/(\d{2}):(\d{2}):(\d{2})/,i=t.exec(this.time);this.hour=i[1],this.minute=i[2],this.second=i[3],this.amPm="",this.formatHour=function(){var e=/0(\d)/;e.test(this.hour)&&(this.hour=this.hour.replace(e,"$1")),Number(this.hour),this.hour>12?(this.hour=this.hour-12,this.hour.toString()):0==this.hour?(this.hour=12,this.hour.toString()):this.hour.toString()},this.formatAmPm=function(){i[1]>11?this.amPm="pm":this.amPm="am"},this.getTime=function(){var e={hour:this.hour,minute:this.minute,second:this.second,amPm:this.amPm};return e}}function initMap(){var e=new google.maps.StyledMapType([{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#ffffff"},{visibility:"on"}]},{name:"Richmond Style"}]),t="richmond_style";map=new google.maps.Map(document.getElementById("map"),{center:{lat:37.586275,lng:-76.947198},zoom:10,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,t]}}),map.mapTypes.set(t,e),map.setMapTypeId(t),$.getJSON("/alley",function(e){var t=window.innerHeight;beaches=e,console.log(beaches),setMarkers(map),$("#map").css({width:mapWidth,height:window.innerHeight-75+"px"}),$("#infoBox").css({width:mapWidth,height:t-(t-50)+"px"})})}function setMarkers(e){function t(e){for(var t=beaches.length-1;t>=0;t--)if(beaches[t].id===e)var i=beaches[t];var o="/images/alley_images/"+i.name;$(".image--box").css({height:imageHeight+"px",width:imageWidth+"px","background-image":'url("'+o+'")'});var a=new formatTime(i.time);a.formatHour(),a.formatAmPm();var n=a.getTime();$("#infoBoxDate").text(formatDate(i.date)),$("#infoBoxTime").text(n.hour+":"+n.minute+" "+n.amPm),$("#infoBoxLat").text(i.latitude),$("#infoBoxLon").text(i.longitude)}for(var i={url:"/images/map_icons/mapsMarker-unvisited.png",size:new google.maps.Size(20,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,32)},o={coords:[1,1,1,20,18,20,18,1],type:"poly"},a=0;a<beaches.length;a++){i.url="/images/map_icons/mapsMarker-unvisited.png";var n=beaches[a];n.latitude=Number(n.latitude),n.longitude=Number(n.longitude);var r,s=new google.maps.Marker({position:{lat:n.latitude,lng:n.longitude},map:e,icon:i,shape:o,id:n.id});google.maps.event.addListener(s,"click",function(e){return function(){r&&(i.url="/images/map_icons/mapsMarker-current.png",r.setIcon(i)),t(e.id),i.url="/images/map_icons/mapsMarker-visited.png",e.setIcon(i),r=e}}(s))}}var beaches,imageHeight=window.innerHeight,imageWidth=6*imageHeight/4.5,mapWidth=window.innerWidth-imageWidth,imageInfoBoxClosed=!0;$("#infoBox").on("click",function(){console.log(imageInfoBoxClosed),imageInfoBoxClosed?($("#map").css({height:window.innerHeight-200+"px"}),$("#infoBox").css({height:window.innerHeight-(window.innerHeight-175)+"px"}),$(".info--arrow").css({top:"15%"}),$(".info--arrow__left").css({transform:"rotate(25deg)"}),$(".info--arrow__right").css({transform:"rotate(-25deg)"}),$(".info--box__info").css({display:"flex"}),imageInfoBoxClosed=!1):($("#map").css({height:window.innerHeight-75+"px"}),$("#infoBox").css({height:window.innerHeight-(window.innerHeight-50)+"px"}),$(".info--arrow").css({top:"50%"}),$(".info--arrow__right").css({transform:"rotate(25deg)"}),$(".info--arrow__left").css({transform:"rotate(-25deg)"}),$(".info--box__info").css({display:"none"}),imageInfoBoxClosed=!0)});