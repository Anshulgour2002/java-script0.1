// function f1(name) {
//     console.log("Hello " + name);


// function f2(callback) {
//     let name = "Anshul";
//     callback(name);   
// }
// }
// f2(f1);
// function func(){
//     console.log("func")
// function first(){
//     console.log("First function");


// function second(callback){
//     // callback()clg
//     console.log("second function")
// }
// }
// }
// func(first(second))

// function func(){
//     console.log("func")
//     function first(){
//         console.log("First function");

//         function second(callback){
//             // callback()
//             console.log("second function")
//         }
//     }
// }

// func(first(second()))

// function second(){
//     console.log("Second function");
// }

// function first(callback){
//     console.log("First function");
//     callback();
// }

// function func(){
//     console.log("Func function");
// }

// func();
// first(second);


// function first(callback){
//     console.log("First function");


//     function callback(calback1){
// console.log("second")
// //    calback1



//     }
// }

// first(callback(10))






// function callback(){
//     try{
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }
//     catch{

//     }
// }
// callback()


// function callbackHell() {
//     try {
//         fetch("https://fakestoreapi.com/products").
//             then((res) => res.json()).
//             then((data) => {
//                 console.log("All Product", data)
//                 let singleCategory = data[1].category;
//                 console.log(singleCategory)
//                 fetch(`https://fakestoreapi.com/products/category/${singleCategory}`).
//                     then((res) => res.json()).
//                     then((data) => {
//                         console.log("Single category i.e", singleCategory, " ke all product", data);
//                         let id = data[0].id;
//                         console.log("id is ", id)
//                         fetch(`https://fakestoreapi.com/products/${id}`).
//                             then((res) => res.json()).then((single) => {
//                                 console.log("single item is ", single)
//                             })

//                     })
//             })

//     }
//     catch (err) {
//         console.log("Got an error while making api call ", err)
//     }
// }
// callbackHell()







// //using-promises

// callbackHell();
// function solveCallBackHell() {
//     fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log("All Product", data);

//             const singleCategory = data[1].category;
//             console.log(singleCategory);

//             return fetch(`https://fakestoreapi.com/products/category/${singleCategory}`);
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log("Single category ke all product", data);

//             const id = data[0].id;
//             console.log("id is", id);

//             return fetch(`https://fakestoreapi.com/products/${id}`);
//         })
//         .then((res) => res.json())
//         .then((single) => {
//             console.log("single item is", single);
//         })
// }

// solveCallBackHell();

//using-Async- awid

async function callback(){
  const data1=  await fetch("https://fakestoreapi.com/products")
   const res1= await data1.json()
   console.log("first api",res1)


   
    let singleCategory = res1[1].category;
    const data2 = await fetch(`https://fakestoreapi.com/products/category/${singleCategory}`);
    const res2 = await data2.json()
    console.log("2nd api calling result", res2)


    const id=res2[1].id
    const data3=await fetch(`https://fakestoreapi.com/products/${id}`)
    const res3=await data3.json()
    console.log("3rd api calling result",res3)

}

callback()