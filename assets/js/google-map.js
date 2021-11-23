function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(-7.9569357,-38.2986448),
    zoom:15,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  }