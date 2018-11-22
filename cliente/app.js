var http = require('http')

var bufferCorpo = [];
var opcoes = {
    hostname:"localhost",
    method:'post',
    port: 80,
    path:"/",
    headers:{
        'Accept':'application/json',
        //'Content-type':'x-www-form.urlenconded'
        'Content-type':'application/json'
    }
}

var html='nome=Fernando Andrade' // x-www-form.urlenconded
var json={'nome':'Fernando Andrade'}
var jsonString = JSON.stringify(json);

//http.get(opcoes, function(res){
   var req = http.request(opcoes, function(res){
        res.on('data',function(pedaco){
            bufferCorpo.push(pedaco)
        })
        res.on('end',function(){

            var corpoResponse = Buffer.concat(bufferCorpo).toString();
            console.log(corpoResponse);
        })

        res.on('error',function(){

        })
});

req.write(jsonString)
req.end();