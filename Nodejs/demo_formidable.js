var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var q =url.parse(req.url,true); 
  if (q.pathname == '/fileupload') {//Just to know if file has been already uploaded or not
    console.log(req.url);
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/corodri/Desktop/javascript/Nodejs/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');//When form is completely submitted, /fileupload is added to url
    res.write('</form>');
    return res.end();
  }
}).listen(8080);