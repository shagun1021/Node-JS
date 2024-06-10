const fs=require('fs');



// read file

console.log(fs.readFileSync('./hello.js','utf-8')); // read file Sync (return) 

console.log(fs.readFile('./hello.js','utf-8',(err,result)=>{
  if(err) console.log(err);
  else console.log(result);
}));  // read file Async  (not return)


// create file


fs.writeFileSync('./writefileHello.txt','hello Dear file'); // create a new file

fs.writeFile('./writeAsyfileHello.txt','hello dear file 2',(err,res)=>{
  if(err) console.log(err);
  else console.log(res);
});


// append on file

fs.appendFileSync('./writefileHello.txt',' \n hello again ');
fs.appendFile('./writeAsyfileHello.txt','\n hello again',(err,res)=>{
if(err) console.log(err);
else console.log(res);
})

// copy file

fs.copyFileSync('./hello.js',"hello.txt")

//delete file

fs.unlinkSync('./hello.txt');
