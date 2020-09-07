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
function SetContentMarkers(contentData){
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
      markers.push(newMarker);
    });
 
    //Meisho Kanaomi
    for(let i=0; i<markers.length; i++){
        //console.log(markers[i]);
        google.maps.event.addListener(markers[i], 'click', (function(url){
        return window.open(markers[i].url);}))
    }
}