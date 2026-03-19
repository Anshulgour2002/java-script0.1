 const promise=new Promise();// this is the bad syntex
// console.log("dekho ",promise)

// const promise = new Promise((res, rej) => {

// });
// console.log(promise)

// let num = prompt();
// num = Number(num)
// let num=0
// const promise = new Promise((res, rej) => {
//     if (num >= 10) {
//         res("Bada pura hua hai ")
//     }
//     else {


//         rej("Failed")
//     }
                            
// });
// console.log(promise)



//best way
// let num = 10
// const promise = new Promise((res, rej) => {
//     if (num >= 10) {
//         res("Bada pura hua hai ")
//     }
//     else {
//         rej("Failed")
//     }

// });
// console.log(promise)
// let proResult;
// // promise.then((ans) => { console.log("then method ke andar",ans) }).catch((e) => { console.log("Me Reject ho gya", e) })
// let finalOut = promise.then((ans) => {
//     // console.log(ans)
//     proResult = ans
//     return ans

// }).
//     catch((e) => {
//         // console.log(e)
//         return e
//     })

// // console.log("ye rhi promise kee value", finalOut)

// setTimeout(() => {
//     console.log(proResult)
// }, 4000)



// bad 
// let op=fetch("https://fakestoreapi.com/products")
// console.log(op)


// fetch("https://fakestoreapi.com/products").then((value) => {
//     console.log(value)
//     return value.json();
// }).then((D) => console.log(D))


// let ob = fetch("https://fakestoreapi.com/products");
// console.log("api call hui promise aaya",ob)
// let ans = ob.then((value) => {
//     console.log(value)
//     return value.json();
// })
// console.log("ans me ye aaya hai jo ob deaya hau",ans)
// let xp=ans.then((D) => console.log(D))


fetch("https://fakestoreapi.com/products").then(res => {
console.log(res)

    return res.json()
}).then(i => console.log(i)).catch(e => console.log("got error ", e))