var initialize = function(){
  var centre = {lat: 40.712784, lng: -74.005941};
  var centre2 = {lat: 40.00000, lng: -74.00000};
  var zoom = 12;
  var map = new Map(centre, zoom);
  // map.addMarker(centre, "1");
 
  // var robbenIsland = {lat: -33.8067, lng: 18.3662};
  // map.addMarker(robbenIsland, "2");
 
  map.bindClick();

// var locator = new GeoLocator(map);
// locator.setMapCentre();

// var content = "<h2>my title</h2>";   // Info Window displays on your marker in the map 
// map.addInfoWindow(centre, content);


}




window.onload = initialize;

