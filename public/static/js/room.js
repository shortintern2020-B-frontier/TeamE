// Funcitons to control database
// Ryo Omae


{/* input: ref to database
output: roomid */}
function makeRoom(database) {
    var roomRef = database.ref('room/');
    var newRoomRef = roomRef.push();
    var newRoomId = newRoomRef.key;
    newRoomRef.set({
        userid: 'userdata'
    });
    return newRoomId;
}

{/* input: ref to database, roomid, username
output: userid */}
function addUserToRoom(database, roomId, name){
    var roomRef = database.ref('room/'+roomId);
    var newUserRef = roomRef.push();
    var newUserId = newUserRef.key;
    newUserRef.set({
        userid: newUserId,
        name: name,
        lat: 45.0 ,
        lng: 45.0 ,
    });
    return newUserId;

}
function removeRoom(database, roomId){
    var roomRef = database.ref('room/'+roomId);
    roomRef.remove();
}

function removeUserFromRoom(database, roomId, userId){
    var roomRef = database.ref('room/'+roomId+'/'+userId);
    roomRef.remove();
}

// ユーザーを部屋から削除します。
// 人数が0になった部屋は削除します。
function logoutFromRoom(database, roomId, userId){
    removeUserFromRoom(database, roomId, userId);
    var userList = getUserFromRoom(database, userId);
    if (userList.length == 1){
        console.log('remove room'+roomId);
        removeRoom();
    }
}

