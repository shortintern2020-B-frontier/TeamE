//Meisho.Kanaomi 2020.9.8
function updataAvatar(){
    var roomRef = DataBase.ref("room/"+roomId+"/"+userId)
        roomRef.update({
        userid: userId,
        name: userName,
        avatar: my_avatar,
        })
}
function toNormal(){
    my_avatar = "../img/normal.png"
    updataAvatar()
    console.log(my_avatar)
}
function toSad(){
    my_avatar = "../img/sad.png"
    updataAvatar()
    console.log(my_avatar)
}
function toHappy(){
    my_avatar = "../img/happy.png"
    updataAvatar()
    console.log(my_avatar)
}