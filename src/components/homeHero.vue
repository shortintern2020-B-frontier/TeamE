<template>
  <v-parallax v-bind:src="assetsImage">
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">VTour</h1>
        <h4 class="subheading">コロナ渦における新たな旅行のあり方の提案</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/homeHero.jpg')
      // assetsImage_NG: "../assets/img-assets.png",
      // staticImage: "/img-static.png"
    };
  }
};
</script>
