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
      <div v-if="keyword.length">
      <v-card flat>
        <li v-for="item in searched" :key="item.package_name">
          <router-link :to="{ name: 'Detail',params: { id: item.package_id }}">
          {{ item.package_name }}
          </router-link>
        </li>
      </v-card>
    </div>
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
