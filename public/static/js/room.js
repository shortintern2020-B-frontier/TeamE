// Funcitons to control database
// Ryo Omae


{/* input: ref to database
output: roomid */}
function makeRoom(database) {
    var roomRef = database.ref('room/');
    var newRoomRef = roomRef.push();
    var newRoomId = newRoomRef.key;
    newRoomRef.set({
        roomid: newRoomId
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
    database.ref('room/'+roomId).once('value',function(parent){
        if(parent.numChildren() <= 1){
                console.log('remove room'+roomId);
                removeRoom(database, roomId);
                window.alert('ログアウトしました');
                window.location.href="../../";
        } else {
            window.alert('ログアウトしました');
            window.location.href="../../";
        }
        
    })
}

function getUserNumberOfRoom(database, roomId){
    var roomRef = database.ref('room/'+roomId);
    let userData
    roomRef.once('value').then(function(snapshot){
        userData = snapshot.val();
        // console.log('userdata', userData);
        var userKeyList = Object.keys(userData);
        userKeyList = userKeyList.filter(n => n != "roomid");
        console.log(userKeyList.length);
        return userKeyList.length;
    });
}

function getUserFromRoom(database, roomId){
    var roomRef = database.ref('room/'+roomId);
    let userData
    roomRef.once('value').then(function(snapshot){
        userData = snapshot.val();
        // console.log('userdata', userData);
        var userKeyList = Object.keys(userData);
        userKeyList = userKeyList.filter(n => n != "roomid");
        // console.log(userKeyList);
        var userList=[];
        userKeyList.forEach(element => {
            userList.push(userData[element]);
        });
        return userList;
    });
}
