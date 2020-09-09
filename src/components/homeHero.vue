/** * @author Kota Yukawa */

<template>
<div>
  <v-parallax dark v-bind:src="assetsImage">
    <v-container fluid>
      <v-row align="center" justify="center" align-content="center">
        <v-col class="text-center">
          <h1 class="display-4 font-weight-bold mb-2 text-h2">VTour</h1>
          <h4 class="title font-weight-bold text-h5">
            - コロナ渦における新たな旅行のあり方の提案 -
          </h4>
        </v-col>
      </v-row>
    </v-container>
      <v-form ref="form">
        <v-text-field
          v-model="keyword"
          background-color="white"
          label="search"
        ></v-text-field>
      </v-form>
  </v-parallax>
</div>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/homeHero.jpg'),
      keyword:'',
    };
  },
  props:[
    'datas',
  ]
};
</script>
