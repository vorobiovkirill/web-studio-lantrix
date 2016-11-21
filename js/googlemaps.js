google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
 var mapOptions = {
  center: new google.maps.LatLng(50.444604,30.5198),
  zoom: 17,
  zoomControl: true,
  zoomControlOptions: {
   style: google.maps.ZoomControlStyle.DEFAULT,
 },
 disableDoubleClickZoom: true,
 mapTypeControl: true,
 mapTypeControlOptions: {
   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
 },
 scaleControl: true,
 scrollwheel: false,
 panControl: true,
 streetViewControl: true,
 draggable : true,
 overviewMapControl: true,
 overviewMapControlOptions: {
   opened: false,
 },
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}],
}
var mapElement = document.getElementById('lantrix_map');
var map = new google.maps.Map(mapElement, mapOptions);
var locations = [
['Lantrix', 'WEB Studio Lantrix', '0445680589', 'info@lantrix.com.ua', 'lantrix.com.ua', 50.443661, 30.520205, 'https://lantrix.com.ua/img/map-marker-lantrix.png']
];
for (i = 0; i < locations.length; i++) {
  if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
  if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
  if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
  if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
  if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
  marker = new google.maps.Marker({
   icon: markericon,
   position: new google.maps.LatLng(locations[i][5], locations[i][6]),
   map: map,
   title: locations[i][0],
   desc: description,
   tel: telephone,
   email: email,
   web: web
 });
  if (web.substring(0, 7) != "http://") {
   link = "http://" + web;
 } else {
   link = web;
 }
 bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
}
function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
  var infoWindowVisible = (function () {
   var currentlyVisible = false;
   return function (visible) {
    if (visible !== undefined) {
     currentlyVisible = visible;
   }
   return currentlyVisible;
 };
}());
  iw = new google.maps.InfoWindow();
  google.maps.event.addListener(marker, 'click', function() {
   if (infoWindowVisible()) {
    iw.close();
    infoWindowVisible(false);
  } else {
    var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
    iw = new google.maps.InfoWindow({content:html});
    iw.open(map,marker);
    infoWindowVisible(true);
  }
});
  google.maps.event.addListener(iw, 'closeclick', function () {
   infoWindowVisible(false);
 });
}
}
