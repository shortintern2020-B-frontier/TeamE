// Funcitons to control database
// Ryo Omae

<script>
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
            name: name
        });
        return newUserId;

    }

    function removeUserFromRoom(database, roomId, userId){
        var roomRef = database.ref('room/'+roomId+'/'+userId);
        roomRef.remove();

    }
    export makeRoom;
    export addUserToRoom;
</script>