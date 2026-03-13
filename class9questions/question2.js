// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 = user1;
// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1); 
// console.log("user2", user2);
// Ans=>user1 and user2 both are same because apan ne unko pahle hi user2=user1 kar diya to dono same ho gye

// ##############################################################################################
// Q.
 const user11 = {
   userName: "syam",
   age: 20,
   address: {
    city: "katni",
     state: "mp",
   },
 };


 const user12 = { ...user11};
 user12.userName = "Raghav";
 user12.address.city = "Jab"; 
 console.log("user11", user11); 
 console.log("user12", user12); 

//2nd category
const user12 = { ...user11,...user11.address };
user12.userName = "Raghav";
user12.address.city = "Jabalpur"; 
console.log("user12 has newly assign city which in user11", user12); 
//3rd category

const user12 = JSON.parse(JSON.stringify(user11));
user12.userName = "Raghav";
user12.address.city = "Jabalpur"; 
console.log("no changes bcs we do deep copy", user11); 
console.log("name and city in user12 object has changed", user12); 
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" });
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2));
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });

// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function values(a,...args,c){//error
//   console.log(a,args,c);
// }

// function values(a, c, ...args) {

//   console.log(a, c, args);//ans-: 1 10 [ 2, 4, 5, 6, 8 ]
// }
// values(1, 10, 2, 4, 5, 6, 8);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(name);
// var name = "John";
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
async function PrintValue() {
  return "Hello world";
}
let ans = PrintValue();
console.log(ans);
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();
//  async function PrintValue() {
//   return "Hello world";
// }
// let ans =  PrintValue();
// console.log(ans);
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let result = PrintValue();
// console.log(result);
// //Ans=> 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2]==[1,2])
// console.log([1,2]===[1,2])
// //Ans=> 



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.26
// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 10;
//   return inner;
// }
// const result = outer();
// result();
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)
//    },1000);
//  }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  for(var i=0;i<=3;i++){
//   function ab(i){
//       setTimeout(()=>{
//       console.log(i)
//   },1000);}
//   ab(i);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// const foo=()=>{
//   console.log(this.name);
//  }
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  function foo1(){
//   console.log(this.name);
// }
// foo1.call({name:"mohan"})
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// function foo1() {
//   console.log(this.name); 
  
//   const bar = () => {
//     console.log(this.name); 
//   };
//   bar();
// }
// foo1.call({ name: "Mahi" });
//  //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Freeze the object 
// const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };
//  //Ans



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. 
// fool();
// var fool=20;
// function fool(){
//     console.log("Calling ")
// }
// fool();
// //Ans

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.

// async function foo23() {
//   throw new Error("Hello");
//   return "hello";
// }
// const result12 = foo23();
// console.log("Reject the Promise ",result12);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function greet() {
//   return new Promise(() => {});
// }
// const ans = greet();
// console.log("Pending the promise",ans);
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Flatten an given below an array 
// // let arr= [1,[2,3],[[4,5]],[[[6]]]];
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// // console.log(typeof(NaN));// this is number
// // console.log(Nan===NaN);// it can anything  so return false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// Destructure the property from the object
// const user = { userNamename: "ramesha", age: 24 };
