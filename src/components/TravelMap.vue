<template>
    <GoogleMapLoader
        :mapConfig='mapConfig'
        apiKey='APIKEY'    
    >
    <template slot-scope="{google, map}">
        {{map}}
        {{google}}
    </template>
    </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader
  },

  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 0, lng: 0 }
      }
    },
  },
}
</script>