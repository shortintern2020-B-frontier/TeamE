// Funcitons to control database
// Ryo Omae

<script>
    function makeContent(database, contentData) {
        var newContentRef = database.ref('')
    }

    {/* input: ref to database
    output: roomid */}
    function makeRoom(database) {
        var roomRef = database.ref('room/');
        var newRoomRef = roomRef.push();
        var newRoomId = newRoomRef.key;
        newRoomRef.set({
            
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

    function removeUserFromRoom(database, roomId, userId){
        var roomRef = database.ref('room/'+roomId+'/'+userId);
        roomRef.remove();

    }

    
    function getUserFromRoom(database, roomId){
        var roomRef = database.ref('room/'+roomId);
        let userList
        roomRef.once('value').then(function(snapshot){
            userList = snapshot.val();

        })
        var userKeyList = Object.keys(userList);
        userKeyList = userKeyList.filter(n => n != "roomid");
    }
    export makeRoom;
    export addUserToRoom;
    export removeUserFromRoom;
</script>