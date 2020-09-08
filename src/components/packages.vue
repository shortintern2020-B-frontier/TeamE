/**
 * @author Tomoharu Yanase
 */
<template>
  <!-- <v-container class="ma-0 pa-0" fluid> -->
  <v-row id="flex-container">
    <v-col cols="3">
      <span class="font-weight-bold text-h4 pl-6">エリアから探す</span>
      <v-card class="pb-2"  flat :key="すべて表示" v-on:click="region_choice=''">
        <v-img
          :src="allimage"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="120px"
        >
          <v-card-title class="white--text align-end" v-text="'全て表示'"></v-card-title>
        </v-img>
      </v-card>
      <v-card class="pb-2" v-for="region in regions" :key="region.region" :src="region.src" flat  v-on:click="region_choice=region.region; triggerEvent">
        <v-img
          :src="region.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="120px"
        >
          <v-card-title class="white--text align-end" v-text="region.region"></v-card-title>
        </v-img>
      </v-card>
    </v-col>

    <v-divider vertical class="mt-2"></v-divider>

    <v-col cols="8">
      <div v-if="filter.length">
        <span class="packs font-weight-bold text-h4 pl-6">{{ region_choice }}</span>
        <v-divider class="mb-2" id="divider-top"></v-divider>
      </div>
      <div v-else>
      <span class="packs font-weight-bold text-h4 pl-6">パッケージ一覧</span>
      <v-divider class="mb-2" id="divider-top"></v-divider>
      <router-link to="/detail">
        <v-card class="pb-2" v-for="item in val" :key="item.package_name" :src="item.package_image" flat>
          <v-img
            :src="item.package_image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500px"
          >
            <v-card-title class="white--text align-end" v-text="item.package_name"></v-card-title>
          </v-img>
          <v-divider class="mt-2"></v-divider>
        </v-card>
      </router-link>
      </div>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
  props: [
    'val',
    'filter',
    ],
 
  data: () => ({
    regions: [
      { region: "北海道", src: require("@/assets/Hokkaido.jpg") },
      { region: "茨城", src: require("@/assets/Ibaraki.jpg") },
      { region: "東京", src: require("@/assets/Tokyo.jpg") },
      { region: "京都", src: require("@/assets/Kyoto.jpg") },
      { region: "大阪", src: require("@/assets/Osaka.jpg") },
      { region: "沖縄", src: require("@/assets/Okinawa.jpg") },
    ],
    region_choice: '',
    allimage: require("@/assets/Okinawa.jpg")
  }),


  methods:{
    triggerEvent:function(){
      console.log(this.region_choice);
      this.$emit('send',this.region_choice);
    }
  }
};
</script>

<style lang="css">
#flex-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-left: 0;
}
</style>

