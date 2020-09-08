<!-- @author ISSEI MIYAMOTO -->

<template>
  <v-card class="mx-auto" max-width="360px" outlined style="padding: 0;">
    <div class="new-tour container">
      <p>このツアーで旅行を始める</p>
      <input type="text" placeholder="ニックネーム" />
      <button>新規作成</button>
    </div>
    <div class="exist-tour container">
      <p>友達が開始した旅行に参加する</p>
      <input type="text" placeholder="ニックネーム" />
      <input type="text" placeholder="ルームID" />
      <button onclick="location.href='./static/page/streetView.html'">参加する</button>
    </div>
  </v-card>
</template>

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
