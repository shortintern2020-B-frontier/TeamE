<template>
<v-app>
  <v-parallax dark v-bind:src="assetsImage">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col align-self="auto">
          <h1 class="display-4 font-weight-bold mb-4">VTour</h1>
          <h4 class="title">コロナ渦における新たな旅行のあり方の提案</h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
      <v-col align-self="auto">
          <div class="cp_iptxt">
            <input class="ef" type="text" placeholder="">
            <label>SEARCH</label>
            <span class="focus_line"><i></i></span>
          </div>
          </v-col>
          </v-row>
    </v-container>
  </v-parallax>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      assetsImage: require('@/assets/homeHero.jpg')
    };
  }
};
</script>

<style>
  .cp_iptxt {
    position: relative;
    text-align: center;
    width: 50%;
    margin: 40px 25%;
  }
  .cp_iptxt input[type='text'] {
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    letter-spacing: 1px;
    padding-left: 4em;
  }
  .cp_iptxt input[type='text']:focus {
    outline: none;
  }
  .ef {
    padding: 7px 14px;
    transition: 0.4s;
    border: 1px solid #1b2538;
    background: white;
  }
  .ef ~ .focus_line:before,
  .ef ~ .focus_line:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    transition: 0.3s;
    background-color: blue;
  }
  .ef ~ .focus_line:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef ~ .focus_line i:before,
  .ef ~ .focus_line i:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    content: '';
    transition: 0.4s;
    background-color: blue;
  }
  .ef ~ .focus_line i:after {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }
  .ef:focus ~ .focus_line:before,
  .ef:focus ~ .focus_line:after,
  .cp_iptxt.ef ~ .focus_line:before,
  .cp_iptxt.ef ~ .focus_line:after {
    width: 100%;
    transition: 0.3s;
  }
  .ef:focus ~ .focus_line i:before,
  .ef:focus ~ .focus_line i:after,
  .cp_iptxt.ef ~ .focus_line i:before,
  .cp_iptxt.ef ~ .focus_line i:after {
    height: 100%;
    transition: 0.4s;
  }
  .ef ~ label {
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 14px;
    width: 100%;
    transition: 0.3s;
    letter-spacing: 0.5px;
    color: #aaaaaa;
  }
  .ef:focus ~ label,
  .cp_iptxt.ef ~ label {
    font-size: 12px;
    top: -18px;
    left: 0;
    transition: 0.3s;
    color: white;
  }
</style>