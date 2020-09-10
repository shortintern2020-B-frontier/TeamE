/** * @author Kota Yukawa */

<template>
  <div>
    <v-parallax dark v-bind:src="assetsImage">
      <v-container fluid>
        <v-row align="center" justify="center" align-content="center">
          <v-col class="text-center">
            <h1 class="display-4 font-weight-bold mb-2 text-h2 white--text">
              VTour
            </h1>
            <h4 class="title font-weight-bold text-h5 white--text">
              - コロナ渦における新たな旅行のあり方の提案 -
            </h4>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-card flat class="pt-2 pr-5">
      <v-form>
        <v-text-field
          class="pt-3"
          outlined
          label="パッケージを検索"
          @submit.prevent
          v-model="keyword"
          background-color="white"
          autofocus
        ></v-text-field>
      </v-form>
      <transition>
        <div v-if="keyword.length">
          <v-row>
            <v-col cols="8">
              <v-card raised elevation="24" hover>
                <v-card-title>検索結果</v-card-title>
                <v-divider></v-divider>
                <v-list rounded shaped transition="scroll-y-transition">
                  <transition-group name="anime-list">
                    <v-list-item
                      v-for="item in searched"
                      :key="item.package_name"
                      :to="{ name: 'Detail', params: { id: item.package_id } }"
                    >
                      {{ item.package_name }}
                    </v-list-item>
                  </transition-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </transition>
    </v-card>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require("@/assets/homeHero.jpg"),
      keyword: ""
    };
  },
  //@auther Tomoharu Yanase-search function
  computed: {
    searched: function() {
      var items = [];
      for (var i in this.datas) {
        var item = this.datas[i];
        if (
          item.package_name.indexOf(this.keyword) !== -1 ||
          item.region.indexOf(this.keyword) !== -1
        ) {
          items.push(item);
        }
      }
      return items;
    }
  },
  props: ["datas"]
};
</script>
<style scoped>
h1 {
  text-shadow: 4px 5px 6px #000000;
}
h4 {
  text-shadow: 4px 5px 6px #000000;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-leave-to {
  opacity: 0;
}

.anime-list-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.anime-list-enter-to {
  opacity: 1;
}
.anime-list-enter-active {
  transition: all 1s 0s ease;
}
</style>
