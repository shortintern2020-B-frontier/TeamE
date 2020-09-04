<template>
  <div>
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  computed: {
    google: gmapApi
  }
}

"use strict";
let panorama;
let markers=[];
let map;
var PinIsVisible=true;
var response;

function initMap() {
  const astorPlace = {
      lat: 42.345573,
      lng: -71.098326
  }; // Set up the map

  map = new google.maps.Map(document.getElementById('map'), {
  center: astorPlace,
  zoom: 18,
  streetViewControl: true,
  });

  const cafeMarker = new google.maps.Marker({
    position: {
      lat: 42.3456,
      lng: -71.0984
    },
    map,
    icon:
      "img/楽天パンダ.png",
    title: "Cafe",
    url:'https://www.rakuten.co.jp/'
  });
  markers.push(cafeMarker);

  const bankMarker = new google.maps.Marker({
    position: {
      lat: 42.3456,
      lng: -71.098,
    },
    map,
    icon:
      "img/楽天パンダ.png",
    title: "Bank",
    url:'https://www.rakuten.co.jp/'
  });
  markers.push(bankMarker);

  const busMarker = new google.maps.Marker({
    position: {
      lat: 42.345,
      lng: -71.098
    },
    map,
    icon:
      "img/楽天パンダ.png",
    title: "Bus Stop",
    url:'https://www.rakuten.co.jp/'
  }); // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  markers.push(busMarker);

  for(let i=0; i<markers.length; i++){
      console.log(markers[i]);
      google.maps.event.addListener(markers[i], 'click', (function(url){
  return window.open(markers[i].url);}))}
  
  
  
  //function(){ location.href = url; };
  //})(markers[i].url));
  //}

  panorama = map.getStreetView();
  panorama.setPosition(astorPlace);
  panorama.setPov(
    /** @type {google.maps.StreetViewPov} */
    {
      heading: 265,
      pitch: 0
    }
  );
  panorama.setVisible(true);
  var latlng = panorama.getPosition()
  console.log(latlng)
}

function toggleStreetView() {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
    showMarkers();
  } else {
    panorama.setVisible(false);
    hideMarkers();
  }
}

function togglePins() {
  const toggle = panorama.getVisible();

  //パノラマ状態じゃないときは変更しない
  if(toggle == false){
      return;
  }

  if (PinIsVisible == false) {
    showMarkers();
    PinIsVisible = true;
  } else {
    hideMarkers();
    PinIsVisible = false;
  }
}

function setMapOnAll(map){
    for(let i=0; i<markers.length; i++){
        markers[i].setMap(map);
    }
}

//markerを非表示にする
function hideMarkers(){
    setMapOnAll(null);
}
//markerを表示する
function showMarkers(){
    setMapOnAll(map);
}

//markerを消去する
function deleteMarkers(){ 
    hideMarkers();
    markers=[];
}
</script>