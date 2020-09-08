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

    })
}


