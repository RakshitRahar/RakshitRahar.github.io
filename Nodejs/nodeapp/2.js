import fs from 'fs'
// fs.writeFile("myFile.txt","Hello world",(err)=>{
//     if(err) throw err;
// });


// fs.appendFile("myFile.txt","Hello world",(err)=>{
//     if(err) throw err;
// });



// fs.readFile("about.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

fs.rename("myFile.txt","newFile.txt",(err)=>{
    if (err) throw err
})