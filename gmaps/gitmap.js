var map = new GMaps({
  div: '#map',
  lat: 31.066345,
  lng: -94.480402,
  zoom: 9,
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
  lat: 31.066345,
  lng: -94.480402,
    title: '312 Vj Cryer Rd.',
    icon: 'gmaps/icons/star-marker.png',
  infoWindow: {
    content: '<b>Git&rsquo;r Done</b><br>312 Vj Cryer Rd.<br>Huntington, TX 75949<br><a target="_blank" href="https://www.google.com/maps/place/312+Vj+Cryer+Rd,+Huntington,+TX+75949/@31.0702301,-94.7527504,10z/data=!4m5!3m4!1s0x86384c209627f62b:0x6db55994e905656e!8m2!3d31.0663102!4d-94.4791279">View on Google Maps</a>'
  }
});
