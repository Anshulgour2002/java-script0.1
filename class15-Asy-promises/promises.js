// const firstp= new firstp((resolve,reject)=>{
//     resolve("This is not working")
// })

// firstp.then((value)=>{clg(value)})


// use resolve

// const firstp = new Promise((resolve, reject) => {
//     resolve("This is working");
// });

// firstp.then((value) => {
//     console.log(value);
// });
const program= new Promise((resolve,reject)=>{
     let useboolien=true;
    if(useboolien){
        resolve("This is true")
    }
    else{
        reject("this is ERROR")
    }
})

program
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
});






