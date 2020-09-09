//Ryota Watanabe 2020/09/08
var roomRef = DataBase.ref("chat/roomid");

const send = document.getElementById("send");
const message = document.getElementById("message");
var commentid = "-MGgFpByYA0l9TQ_MTXb";

send.addEventListener('click',function(){
    var now = new Date();
    //ゼロ埋め処理
    var yyyy = now.getFullYear();
    var mm = ("0"+(now.getMonth()+1)).slice(-2);
    var dd = ("0"+now.getDate()).slice(-2);
    var hh = ("0"+now.getHours()).slice(-2);
    var mi = ("0"+now.getMinutes()).slice(-2);
    var ss = ("0"+now.getSeconds()).slice(-2);

    DataBase.ref("chat/"+"roomid/").push({
        comment:message.value,
        date:yyyy+"-"+mm+"-"+dd+" "+hh+":"+mi+":"+ss,
        name:userName
    });

    message.value="";
});

var chatRef=DataBase.ref("chat/roomid/");
chatRef.on('value',function(snapshot){
    console.log("chatRef:"+chatRef);
    chatData=snapshot.val();
    //console.log("chatData:"+chatData);
    Object.keys(chatData).forEach(function(key){
        console.log("date:"+chatData[key]["date"]);
        console.log("name:"+chatData[key]["name"]);
        console.log("comment:"+chatData[key]["comment"]);
    })
})


