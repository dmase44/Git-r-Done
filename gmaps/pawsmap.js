var map = new GMaps({
  div: '#map',
  lat: 34.855345,
  lng: -112.458823,
  zoom: 15,
  zoomControl : true,
  zoomControlOpt: {
    style : 'SMALL',
    position: 'RIGHT_BOTTOM'
  },
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
  },
});
map.addMarker({
  lat: 34.855345,
  lng: -112.458823,
    title: 'The Paw Den Inn',
    icon: 'gmaps/icons/pawBlk.png',
  infoWindow: {
    content: '<b>Go’in To The Dogs & Cats</b><br>21340 N Old Highway 89<br>Paulden, AZ 86334<br><a target="_blank" href="https://goo.gl/maps/ysw8smiHpTw">View on Google Maps</a>'
  }
});
