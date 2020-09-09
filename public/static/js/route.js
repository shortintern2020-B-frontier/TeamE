//Ryota Watanabe 2020/09/08
var routeRef=DataBase.ref("package/001/route");
routeRef.once('value',function(snapshot){
    var routeData=snapshot.val();
    Object.keys(routeData).forEach(function(key){
        console.log("lat:"+routeData[key]["lat"]);
        console.log("lng:"+routeData[key]["lng"]);
    })
})