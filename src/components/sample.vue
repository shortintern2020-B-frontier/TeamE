<template>
    <div>
        <div 
            id="map"
            :style="{width: mapWidth + 'px', height: mapHeight + 'px'}"/>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
        <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqchniiuahLqMZP9-WOdvo_w5pMQ6uGhQ&callback=initMap&libraries=&v=weekly"
        defer
        ></script>
    </div>
    
</template>
<script>
export default {
    
}

"use strict";

      let panorama;
      let markers=[];
      let map;
      var PinIsVisible=true;

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
            "img/tokyo_2021.png",
          title: "Cafe",
          clickable: true,
        });
        markers.push(cafeMarker);

        const bankMarker = new google.maps.Marker({
          position: {
            lat: 42.3456,
            lng: -71.098
          },
          map,
          icon:
            "img/tokyo_2021.png",
          title: "Bank",
        });
        markers.push(bankMarker);

        const busMarker = new google.maps.Marker({
          position: {
            lat: 42.345,
            lng: -71.098
          },
          map,
          icon:
            "img/tokyo_2021.png",
          title: "Bus Stop",
        }); // We get the map's default panorama and set up some defaults.
        // Note that we don't yet set it visible.
        markers.push(busMarker);

        for(let i=0; i<markers.length; i++){
            console.log(markers[i]);
        }

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

<style type="text/css">
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: "Roboto", "sans-serif";
        line-height: 30px;
        padding-left: 10px;
      }

      #floating-panel {
        margin-left: -100px;
      }
    </style>