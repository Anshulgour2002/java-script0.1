// let url = ('https://jsonplaceholder.typicode.com/todos/1');
// fetch(url)
// fetch(url).then((ip)=>
//     console.log(ip.json()))

// .catch((u)=>
//     console.log(e))



// let url = ('https://jsonplaceholder.typicde.com/todos/1');
// fetch(url)
// .then((responses)=>responses.json())
// .then((data)=>{
//     console.log(data)
// })
// // .catch((errror)=>
// // console.log("ERROR", errror)
// // )


let url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
});