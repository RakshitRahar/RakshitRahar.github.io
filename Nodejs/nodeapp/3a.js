import http from 'http';
let server =http.createServer((req,res)=>{
    res.end("bye.....");
});

server.listen(3001,()=>{
    console.log("Server Started");
})