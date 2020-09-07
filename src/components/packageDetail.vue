<!-- @author ISSEI MIYAMOTO -->

<template>
  <div class="package-detail">
    <div class="title-container">
      <h2>{{ contentTitle }}</h2>
    </div>
    <div class="detail-container">
      <h6>体験できること</h6>
      <p>{{ contentAbout }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contentTitle: "京都の名所巡りの旅",
    startPointName: "四条河原町",
    endPointName: "金閣寺",
    contentAbout:
      "京都へ来たなら一度は訪れておきたいのがここ！「清水の舞台から飛び降りる」の語源にもなった人気No1の清水寺、金箔で覆われた舎利殿が見事な金閣寺(鹿苑寺)、東山文化の代表格で風情溢れる銀閣寺(慈照寺)は「京都三大名所」と呼ばれ、数ある京都の観光名所の中でも圧倒的な人気を誇っています。じっくり1ヶ所を訪れるもよし…嵐山や伏見稲荷大社などとセットで訪れるのもよし…時間がないけど全てまわりたい方には、3ヶ所全てを1日で巡る周遊ツアーがおすすめです。京都の名所を上手に押さえて、満足のいく京都旅をお楽しみください。"
  })
};
</script>

<style lang="css">
.title-container {
  margin-top: 64px;
  padding-bottom: 16px;
  padding-left: 48px;
  border-bottom: solid 2px #e3e3e3;
}

.title-container h2 {
  font-size: 32px;
}

.detail-container {
  margin-top: 32px;
  padding-left: 48px;
}

.detail-container p {
  padding-top: 32px;
  font-size: 16px;
}
</style>