<template>
  <div class="home">
    <navbar />
    <homeHero v-bind:datas='alldata'/>
    <packages v-bind:val='alldata' v-bind:filter='filtered' @send-event="parentMethod" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import navbar from "@/components/navbar.vue";
import homeHero from "@/components/homeHero.vue";
import packages from "@/components/packages.vue";
import firebase from 'firebase'

export default {
  name: "Home",
  components: {
    navbar,
    homeHero,
    packages
  },
  data:()=>({
    alldata: [],
    filtered: [],
    regioninfo:'',
  }),
  mounted() {
    firebase.database().ref("package")
      .on("value", snapshot => (this.alldata=snapshot.val()));
  },
  methods: {
   parentMethod(region_choice) {
     this.regioninfo=region_choice;
     if(this.regioninfo!=''){
     firebase.database().ref('/package').orderByChild('region').startAt(this.regioninfo).endAt(this.regioninfo).on('value',snapshot=>this.filtered=snapshot.val())
     if(this.filtered===null){
       this.filtered='notfound'
     }
   }else{
     this.filtered=[];
   }
   }
  }
};
</script>

<style lang="css">
.home {
  padding: 0;
  margin: 0;
}
</style>
