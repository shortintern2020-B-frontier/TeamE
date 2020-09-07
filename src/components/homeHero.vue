<template>
  <v-parallax dark v-bind:src="assetsImage">
    <v-container fluid>
      <v-row align="center" justify="center" align-content="center">
        <v-col class="text-center">
          <h1 class="display-4 font-weight-bold mb-4">VTour</h1>
          <h4 class="title">コロナ渦における新たな旅行のあり方の提案</h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col align-self="auto">
            <div class="cp_iptxt">
              <v-form ref="form">
                <v-text-field
                  v-model="model"
                  :counter="max"
                  :rules="rules"
                  background-color="white"
                  label="search"
                ></v-text-field>
              </v-form>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
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
