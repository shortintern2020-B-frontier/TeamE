<template>
  <!-- <v-container class="ma-0 pa-0" fluid> -->
  <v-row id="flex-container">
    <v-col cols="3">
      <span class="font-weight-bold text-h4 pl-6">エリアから探す</span>
      <v-card class="pb-2" v-for="region in regions" :key="region.region" :src="region.src" flat>
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
      <span class="packs font-weight-bold text-h4 pl-6">パッケージ一覧</span>
      <v-divider class="mb-2" id="divider-top"></v-divider>
      <router-link to="/detail">
        <v-card class="pb-2" v-for="item in items" :key="item.title" :src="item.src" flat>
          <v-img
            :src="item.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500px"
          >
            <v-card-title class="white--text align-end" v-text="item.title"></v-card-title>
          </v-img>
          <v-divider class="mt-2"></v-divider>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
  data: () => ({
    regions: [
      { region: "北海道", src: require("@/assets/Hokkaido.jpg") },
      { region: "茨城", src: require("@/assets/Ibaraki.jpg") },
      { region: "東京", src: require("@/assets/Tokyo.jpg") },
      { region: "京都", src: require("@/assets/Kyoto.jpg") },
      { region: "大阪", src: require("@/assets/Osaka.jpg") },
      { region: "沖縄", src: require("@/assets/Okinawa.jpg") }
    ],
    items: [
      {
        title: "札幌市内の繁華街「すすきの」巡り",
        region: "北海道",
        src: require("@/assets/Sapporo.jpg"),
        display: true
      },
      {
        title: "京都の名所巡りの旅",
        region: "京都",
        src: require("@/assets/Kinkakuji.jpg"),
        display: true
      },
      {
        title: "二子玉川スペシャルツアー",
        region: "東京",
        src: require("@/assets/Hutakotamagawa.jpg"),
        display: true
      }
    ],
    preview: []
  })
};
</script>

<style lang="css">
#flex-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>

