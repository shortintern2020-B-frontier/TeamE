//watanabe 2020/09/04
//Meisho.K 2020/09/07
function toggleStreetView() {
    const toggle = panorama.getVisible();
    
    if (toggle == false) {
    panorama.setVisible(true);
    showMarkers();
    } else {
    panorama.setVisible(false);
    hideMarkers();
    }
}
function togglePins() {
    const toggle = panorama.getVisible();

    //パノラマ状態じゃないときは変更しない
    if(toggle == false){
        return;
    }

    if (PinIsVisible == false) {
      showMarkers();
      PinIsVisible = true;
    } else {
      hideMarkers();
      PinIsVisible = false;
    }
  }

function setMapOnAll(map){
    for(let i=0; i<markers.length; i++){
        markers[i].setMap(map);
    }
}

//markerを非表示にする
function hideMarkers(){
    setMapOnAll(null);
}
//markerを表示する
function showMarkers(){
    setMapOnAll(map);
}

//markerを消去する
function deleteMarkers(){ 
    hideMarkers();
    markers=[];
}