const fs=require('fs')


console.log("Non-Blocking Operation 1"); // sync
console.log("Non-Blocking Operation 2"); // sync

fs.readFile('./writefileHello.txt','utf-8',(res,err)=>{
  
console.log("Blocking Operation 3"); // async
})
console.log("Non-Blocking Operation 4"); // sync
console.log("Non-Blocking Operation 5"); // sync
