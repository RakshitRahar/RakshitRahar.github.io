import http from 'http';
let server =http.createServer((req,res)=>{
    res.end(" hello........");
});

server.listen(3002,()=>{
    console.log("Server Started");
})