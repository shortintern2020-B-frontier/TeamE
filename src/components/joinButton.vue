<!-- @author ISSEI MIYAMOTO -->

<template>
  <v-card class="mx-auto" max-width="360px" outlined style="padding: 0;">
    <div class="new-tour container">
      <p>このツアーで旅行を始める</p>
      <input type="text" v-model="make_name" placeholder="ニックネーム" />
      <button v-on:click="makeNewRoom">新規作成</button>
    </div>
    <div class="exist-tour container">
      <p>友達が開始した旅行に参加する</p>
      <input type="text" v-model="join_name" placeholder="ニックネーム" />
      <input type="text" v-model="join_roomid" placeholder="ルームID" />
      <button v-on:click="joinRoom">参加する</button>
      <!-- <button onclick="location.href='./static/page/streetView.html'">参加する</button> -->
    </div>
  </v-card>
</template>

<script>
import {makeRoom} from '../../public/static/js/room.js';
import firebase from 'firebase';
export default {
  data: function () {
    return {};
  },
  // mounted() {
  //   let makeRoom = document.createElement('script')
  //   makeRoom.setAttribute('src', '../../public/static/js/room.js')
  // },
  methods: {
    makeNewRoom: function () {
      console.log(this.make_name);
      console.log('makeroom');
      var newRoomId = makeRoom(firebase.database());
      console.log(newRoomId)


    },
    joinRoom: function () {
      console.log(this.join_name);
      console.log(this.join_roomid);
      console.log('joinroom');
    },
    makeRoom
  }
}

</script>

<style lang="css">
.container p {
  font-size: 16px;
  font-weight: bold;
}

.container input {
  width: 100%;
  height: 48px;
  border: solid 1px gray;
  border-radius: 10px;
  font-size: 12px;
  padding-left: 12px;
}

.new-tour p {
  padding-top: 24px;
}

.container button {
  width: 100%;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: rgba(83, 152, 255, 1);
  font-size: 16px;
  height: 48px;
  border-radius: 10px;
}

.new-tour button {
  margin-bottom: 32px;
}

.exist-tour button {
  background-color: rgba(255, 56, 92, 1);
  margin-bottom: 32px;
}
</style>
