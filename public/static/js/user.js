  // 2020/09/08 Ryo Omae
  // アバター位置情報更新処理
  var roomRef = DataBase.ref('room/'+roomId);
  var userData
  var userKeyList;
  roomRef.on('value', function(snapshot){
    console.log('roomref on');
    userData = snapshot.val();
    console.log('userdata', userData);
    userKeyList = Object.keys(userData);
    //userKeyList = userKeyList.filter(n => n != "roomid" && n != userId);
    var userList=[];

    deleteMarkers(user_markers);
    user_markers = [];

    userKeyList.forEach(element => {
      var marker = new google.maps.Marker({
          position: {
            lat: userData[element]['lat'],
            lng: userData[element]['lng']
          },
          map,
          icon:
            userData[element]["avatar"],//Meisho.K 2020.9.8
          title:userData[element]["name"]//Meihso.K 2020.9.8
        });
      user_markers.push(marker);
    });
    //Meisho.K 2020.9.8
    //画像をクリックしたらその位置へと移動
    for(let i=0; i<user_markers.length; i++){
        google.maps.event.addListener(user_markers[i], 'click', (function(url){
          var targetPlace = user_markers[i]["position"]
        return panorama.setPosition(targetPlace)
      ;}))
    }
    });


