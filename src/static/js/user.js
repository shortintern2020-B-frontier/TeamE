function readUser(database, roomId){
    // Meisho.K 2020/09/07
    var userData;
    var roomRef = database.ref("room/"+roomId);
    roomRef.on('value', function(snapshot) {
        userData = snapshot.val()
    })
    console.log(userData);}

function writeUser(database, roomId, userId, name, lat,lng){
    var roomRef = database.ref("room/"+roomId+"/"+userId)
    roomRef.update({
        userid: userId,
        name: name,
        lat: lat,
        lng: lng
    })
}

function updatePosition(database, name, roomId, userId){
    // Meisho.K 2020/09/07
    panorama.addListener("position_changed", () => {
        const tmp_position = panorama.getPosition();
        const tmp_lat = tmp_position.lat()
        const tmp_lng = tmp_position.log()
        console.log(tmp_lat)
        var roomRef = database.ref("room/"+roomId+"/"+userId)
        roomRef.update({
        userid: userId,
        name: name,
        lat: tmp_lat,
        lng: tmp_lng
        })
    });
}

