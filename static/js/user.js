function read_user(ref_path, room_ID){
    // Meisho.K 2020/09/07
    var database = firebase.database();

    var userData;
    var roomRef = database.ref("room/"+roomID+"/");
    roomRef.on('value', function(snapshot) {
        userData = snapshot.val()
    })
    console.log(userData);}

function updatePosition(){
    panorama.addListener("position_changed", () => {
        const tmp_position = panorama.getPosition();
        const tmp_lat = tmp_position.lat()
        const tmp_lng = tmp_position.log()
        console.log(tmp_lat)
      });
}

