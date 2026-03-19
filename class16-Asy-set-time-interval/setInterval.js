let id =setInterval(()=>{
    console.log("this is planning")
},1000)


setTimeout(()=>{
    console.log("work Done")
    clearInterval(id)
},10000)





























