/** * @author Kota Yukawa */

<template>
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
      <v-form ref="form" @submit.prevent>
        <v-text-field
          v-model="keyword"
          background-color="white"
          label="search"
        ></v-text-field>
      </v-form>
      <transition>
      <div v-if="keyword.length">
        <v-row>
          <v-col cols="8">
            <v-card raised elevation="24" hover>
            <v-card-title>検索結果</v-card-title>
            <v-divider></v-divider>
            <!--<transition-group name="anime-list">-->
              <v-list rounded shaped transition="scroll-y-transition">
                <transition-group name="anime-list">
                <v-list-item v-for="item in searched" :key="item.package_name" :to="{ name: 'Detail',params: { id: item.package_id }}">
                  {{ item.package_name }}
                </v-list-item>
                </transition-group>
              </v-list>
            <!--</transition-group>-->
            </v-card>
          </v-col>
        </v-row>
      </div>
      </transition>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/homeHero.jpg'),
      keyword:'',
    };
  },
  computed:{
    searched: function(){
      var items=[];
      for(var i in this.datas){
        var item=this.datas[i];
        if(item.package_name.indexOf(this.keyword)!==-1 || item.region.indexOf(this.keyword)!==-1){
          items.push(item);
        }
      }
      return items;
    }
  },
  props:[
    'datas',
  ]
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s
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
