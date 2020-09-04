<template>
<v-app>
  <v-parallax dark v-bind:src="assetsImage">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col align-self="auto">
            <h1 class="display-4 font-weight-bold mb-4">VTour</h1>
            <h4 class="title">コロナ渦における新たな旅行のあり方の提案</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/homeHero.jpg')
    };
  }
};
</script>
