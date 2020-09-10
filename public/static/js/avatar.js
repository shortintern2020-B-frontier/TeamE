//Meisho.Kanaomi 2020.9.8
function updataAvatar() {
  var roomRef = DataBase.ref("room/" + roomId + "/" + userId);
  roomRef.update({
    userid: userId,
    name: userName,
    avatar: my_avatar
  });
  //Meisho.Kanaomi 2020.9.9
  var avatar_element = document.getElementById("my_avatar_img");
  avatar_element.src = my_avatar;
  console.log(avatar_element.src);
}
function toNormal() {
  my_avatar = "../img/normal.png";
  updataAvatar();
}
function toSad() {
  my_avatar = "../img/sad.png";
  updataAvatar();
}
function toHappy() {
  my_avatar = "../img/happy.png";
  updataAvatar();
}
