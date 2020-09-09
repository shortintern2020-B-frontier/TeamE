<!-- @author ISSEI MIYAMOTO -->

<template>
  <div class="drawer">
    <input type="checkbox" id="drawer-check" class="drawer-hidden" />
    <label for="drawer-check" class="drawer-open">
      <span></span>
    </label>

    <div class="drawer-content">
      <div class="content-container">
        <div class="participant-container">
          <p class="participant-title">参加者一覧</p>

          <div class="members">
            <div class="member-container">
              <img src="../assets/Okinawa.jpg" />
              <p>Tomoharu Yanase</p>
            </div>
            <div class="member-container">
              <img src="../assets/Okinawa.jpg" />
              <p>Kota Yukawa</p>
            </div>
            <div class="member-container">
              <img src="../assets/Okinawa.jpg" />
              <p>ISSEY MIYAMOTO</p>
            </div>
          </div>
        </div>

        <div class="chara-container">
          <p>文字サイズ</p>

          <div class="font-container">
            <button type="button" class="bigger btn">大</button>
            <button type="button" class="smaller btn">小</button>
          </div>
        </div>

        <div class="tourID-container">
          <p class="id-title">ツアーID</p>

          <div class="id-wrapper">
            <p>xxxxxxxxxxx</p>
          </div>
          <button class="remove-btn">退出する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.drawer-hidden {
  display: none;
}

.drawer-open {
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  cursor: pointer;
}

.drawer-open span,
.drawer-open span:before,
.drawer-open span:after {
  content: "";
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #333;
  transition: 0.5s;
  position: absolute;
}

.drawer-open span:before {
  bottom: 8px;
}

.drawer-open span:after {
  top: 8px;
}

#drawer-check:checked ~ .drawer-open span {
  background: rgba(255, 255, 255, 0);
}

#drawer-check:checked ~ .drawer-open span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#drawer-check:checked ~ .drawer-open span::after {
  top: 0;
  transform: rotate(-45deg);
}

.drawer-content {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 80px;
  left: 100%;
  z-index: 99;
  background: #fff;
  transition: 0.5s;
}

#drawer-check:checked ~ .drawer-content {
  left: 80%;
}

.drawer-content {
  padding: 0;
  width: 360px;
  height: 600px;
  border: solid 1px gray;
  border-radius: 5px;
}

.content-container {
  padding: 0;
  width: 90%;
}

.participant-title {
  padding-top: 24px;
  padding-bottom: 8px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
  font-weight: bold;
}

.member-container {
  padding: 0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 16px;
}

.member-container img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 16px;
}

.members {
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;
}

.member-container p {
  margin: 0;
  font-size: 12px;
}

.chara-container {
  height: 120px;
}

.chara-container button {
  font-size: 16px;
}

.chara-container p {
  padding-bottom: 8px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
  font-weight: bold;
}

.font-container {
  padding: 0;
  text-align: center;
  align-content: center;
}

.btn {
  width: 45%;
  height: 24px;
  border-radius: 2px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  font-size: 12px;
  border: 1px solid gray;
}

.bigger {
  font-weight: bold;
}

/* .smaller {
  background-color: rebeccapurple;
} */

.id-title {
  font-weight: bold;
  padding-bottom: 8px;
  margin-bottom: 24px;
  font-size: 12px;
  text-align: center;
  border-bottom: solid 2px black;
}

.id-wrapper {
  width: 100%;
  padding: 0;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.id-wrapper p {
  font-size: 12px;
  padding: 0;
  margin: 0;
}

.remove-btn {
  width: 100%;
  padding: 0;
  text-align: center;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(255, 56, 92, 1);
  font-size: 14px;
  color: white;
  font-weight: bold;
}
</style>
