/**
 * @author Kota Yukawa
 */

<template>
  <v-parallax dark v-bind:src="packagedata.package_image">
    <v-container fluid>
      <v-row align="center" justify="center" align-content="center">
        <v-col class="text-center">
          <h4 class="display-1 white--text">{{ packagedata.package_name }}</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  props: ['packagedata']
};
</script>

<style>
.v-parallax__image {
  width: 100vw;
}
</style>