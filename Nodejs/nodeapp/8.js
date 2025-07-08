import express from'express';
const app=express();
app.listen(8080,()=>{
    console.log("server Started");
});

app.use("/images".express.static("images"));
app.use("/images",express.static("images"));
app.get("/products")