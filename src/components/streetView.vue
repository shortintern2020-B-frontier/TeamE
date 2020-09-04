<template>
  <!-- <div id="map"></div> -->
  <div>
    <GmapMap
      ref="mapRef"
      :center="{lat:45, lng:45}"
      :zoom="18"
      map-type-id="terrain"
      streetViewControl: true
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


</script>