// let a=45;
// let b=87;
// console.log(a+b);
// let nam=prompt("Enter your name"," ");
// console.log(nam);
// let tu=confirm("do yo want to exacute this operation?");
// console.log(tu);
const http= require('http');
const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusname=200;
    res.setHeader=('content-type','text/plain');
    res.end('hello yognedra khapangi magar.')
});

server.listen(port,hostname,()=>{
console.log('server running at http://${hostname}:${port}'); 
});