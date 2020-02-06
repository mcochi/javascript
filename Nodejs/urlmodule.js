var url = require ('url');
var addr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;//returns an object {year:2017, month:'february}
console.log(qdata.month);
