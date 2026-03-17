let pizzapromise =new Promise((resolve,reject)=>{
    
    pizza=true;
    if(pizza=true){
        resolve("Pizza is delaivered")
    }
    else{
        reject("not delevered")
    }

})

pizzapromise.then((value)=>console.log(value))
.catch((error)=>console.log(error))