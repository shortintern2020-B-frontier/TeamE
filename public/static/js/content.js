// TODO
// コンテンツ作成処理

// コンテンツ取得処理
// lng, lat, title, url
function getContent(database) {
  var contentRef = database.ref('content/');
  return contentRef;
}

function addContentToDatabase(database) {
  var newContentRef = database.ref('')
}

//Ryota Watanabe 2020/09/07
//fix bugs Meisho.Kanaomi 2020/09/09
function SetContentMarkers(contentData) {
  //console.log(contentData);
  Object.keys(contentData).forEach(element => {
    const newMarker = new google.maps.Marker({
      position: {
        lat: contentData[element]["lat"],
        lng: contentData[element]["lng"]
      },
      map,
      //Meisho.Kanaomi 2020/9/9
      icon: {
        url: contentData[element]["img"],
        scaledSize: new google.maps.Size(100, 100)
      },
      title: contentData[element]["title"],
      url: contentData[element]["url"]
    });
    //Meisho.kanaomi 2020/9/7
    content_markers.push(newMarker);
  });
  //urlを埋め込む
  //Meisho Kanaomi 2020/9/4 
  for (let i = 0; i < content_markers.length; i++) {
    //console.log(markers[i]);
    google.maps.event.addListener(content_markers[i], 'click', (function (url) {
      return window.open(content_markers[i].url);
    }))
  }
}

//Markerの初期配置・情報更新を行う
var contentRef = getContent(DataBase);
var contentData;
var contentTempData;
//Markerの初期配置
contentRef.once('value', function (snapshot) {
  console.log('contentref once')
  contentTempData = snapshot.val();
  SetContentMarkers(contentTempData);
})
console.log(content_markers)
//DBが更新されたときに呼び出される(更新処理に使う)
// contentRef.on('value', function(snapshot) {
//   console.log('contentref on');
//   deleteMarkers(content_markers);
//   contentData = snapshot.val()
//   SetContentMarkers(contentData, content_markers);
// })