<template>
  <v-parallax dark v-bind:src="assetsImage">
    <v-container fluid>
      <v-row align="center" justify="center" align-content="center">
        <v-col class="text-center">
          <h4 class="title white--text">京都の名所巡りの旅</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/Kyoto.jpg')
    };
  }
};
</script>

<style>
.v-parallax__image {
  width: 100vw;
  height: 100%;
}
</style>