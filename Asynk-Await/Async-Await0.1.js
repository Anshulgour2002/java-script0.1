// fetch("https://fakestoreapi.com/products").then(res => {
// console.log(res)

//     return res.json()
// }).then(i => console.log(i)).catch(e => console.log("got error ", e))


// async function callAPI() {
//         let res = await fetch("https://fakestoreapi.com/products")
//         // console.log(res)

//         let ans = await res.json()
//         // console.log(ans)
//         return ans

   
// }
// let data =callAPI()
// data.then(i=>console.log(i))

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
