var http = require ('http');
var fs = require ('fs');

http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
    fs.appendFile('mynewfile1.txt','Hello Content!',function (err) {
        if (err) throw err;
        console.log('Saved!')
    })
    fs.open('mynewfile2.txt','w', function (err, file){
        if (err) throw err;
        console.log('Saved2!');
    });
}).listen(8080);