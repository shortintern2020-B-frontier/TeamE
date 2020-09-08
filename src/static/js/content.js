// TODO
// コンテンツ作成処理

// コンテンツ取得処理
// lng, lat, title, url
function getContent(database){
    var contentRef = database.ref('content/');
    return contentRef;
}

function addContentToDatabase(database, contentData) {
    var newContentRef = database.ref('')
}

//Ryota Watanabe 2020/09/07
function SetContentMarkers(contentData, markers){
    //console.log(contentData);
    Object.keys(contentData).forEach(function(key){
      const newMarker = new google.maps.Marker({
      position: {
        lat: contentData[key]["lat"],
        lng: contentData[key]["lng"]
      },
      map,
      icon:
        "../img/tokyo_2021.png",
      title: contentData[key]["title"],
      url:contentData[key]["url"]
      });
      //meisho.k 2020/9/7
      content_markers.push(newMarker);
    });
    //urlを埋め込む
    //Meisho Kanaomi 2020/9/4
    for(let i=0; i<content_markers.length; i++){
        //console.log(markers[i]);
        google.maps.event.addListener(content_markers[i], 'click', (function(url){
        return window.open(content_markers[i].url);}))
    }
}

//Markerの初期配置・情報更新を行う
var contentRef=getContent(DataBase);
var contentData;
var contentTempData;
//Markerの初期配置
contentRef.once('value',function(snapshot){
  console.log('contentref once')
  contentTempData = snapshot.val();
  SetContentMarkers(contentTempData, content_markers);
})
//DBが更新されたときに呼び出される(更新処理に使う)
contentRef.on('value', function(snapshot) {
  console.log('contentref on');
  deleteMarkers(content_markers);
  contentData = snapshot.val()
  SetContentMarkers(contentData, content_markers);
})