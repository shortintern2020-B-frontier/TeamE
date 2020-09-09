//Ryota Watanabe 2020/09/08

const send = document.getElementById("send");
const message = document.getElementById("message");
var commentid = "-MGgFpByYA0l9TQ_MTXb";

const remove_comments = document.getElementById("remove_comments");

//コメントの投稿機能
send.addEventListener('click',function(){
    var now = new Date();
    //ゼロ埋め処理
    var yyyy = now.getFullYear();
    var mm = ("0"+(now.getMonth()+1)).slice(-2);
    var dd = ("0"+now.getDate()).slice(-2);
    var hh = ("0"+now.getHours()).slice(-2);
    var mi = ("0"+now.getMinutes()).slice(-2);
    var ss = ("0"+now.getSeconds()).slice(-2);

    DataBase.ref("chat/"+roomId).push({
        comment:message.value,
        date:yyyy+"-"+mm+"-"+dd+" "+hh+":"+mi+":"+ss,
        name:userName
    });

    message.value="";
});

//コメントの削除
remove_comments.addEventListener('click',function(){
    console.log("remove all comments");
    Object.keys(chatData).forEach(function(key){
        //console.log("chat/"+roomId+"/"+key)
        DataBase.ref("chat/"+roomId+"/"+key).update({
            comment:null,
            date:null,
            name:null
        })
    })
})

//コメントの表示更新機能(console出力)
var chatRef=DataBase.ref("chat/"+roomId);
chatRef.on('value',function(snapshot){
    //console.log("chatRef:"+chatRef);
    chatData=snapshot.val();
    //console.log("chatData:"+chatData);

    if(chatData==undefined) return;
    
    Object.keys(chatData).forEach(function(key){
        console.log("date:"+chatData[key]["date"]);
        console.log("name:"+chatData[key]["name"]);
        console.log("comment:"+chatData[key]["comment"]);
    })
})


