// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("hey");
// {
//   let a = 1;
//   let b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
    

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("hey");
// {
//   var a = 1;
//   var b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// Ans=>hey
// 1
// 2
// 1
// 2
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(a);
//  var a=()=>{
//      console.log("hello");
//      }

// ans=undefined

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(a);
// function a(){
//     console.log("hello");
// }

// Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// var x=20;
// function printValue(){
//     console.log(x); //ans is undefined bcs access x without declare
//     var x=10;
// }
// printValue();
// Ans=>undefine


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
//  var x=20;
// function printValue1(){
//     console.log(x);
//      x=10;
//      console.log(x);

// }
// console.log(x);
// printValue1();
// Ans=>20
// 20
// 10



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("start ");
// setTimeout(()=>{
//     console.log("setTime");
// },0);
// console.log("end");
// Ans=>start
// end
// settime


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(y);
// console.log(typeof(y));
// Ans=>erro


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function abc() {
//   a = 10;
//   b = 20;
//   console.log(a);//10
//   console.log(b);//20
// }
// abc();
// console.log(a);//10
// console.log(b);//20
// // Ans=>10
// 20
// 10
// 20


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" });
// Ans=>false,false
//kyuki dono ki value same hai lekin address alag alag hai 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// console.log(name);
// var name = "John";
// Ans=>undefined because name can initialise after defined


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// let a = 10; 
// console.log(typeof typeof typeof a);
// Ans=>string kyuki 1st typeof me number ayega second me string or 3rd string bhi string hota hai


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let a=10;
// console.log(++a)
// console.log(a)
// let a1=10;
// console.log(a1++)
// console.log(a1)
// Ans=>11
// 11
// 10
// 11


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(1<2<3)
// console.log(3>2>0)
// console.log(3>2>1)
// Ans=>3rd are falsse because 3rd are 3>2=1
//1>1=0false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const z=null;
// console.log(typeof z)
// const a=undefined;
// console.log(typeof a)
// Ans=>null is the object and undefined is undefined

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function printVal(){
//   var x=10;
//   console.log(x);//10
// }
// printVal();
// console.log(x);
// Ans=>ReferenceError: x is not defined kyuki x name ka koi variable nhe bana only function ke andeer hai

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function demo(){
//   console.log("hey");//hey print
// }
// const ans=demo();
// console.log(ans);


// function demo1(){
//   return "hey";
// }
// const ans1=demo1();
// console.log(ans1);
// Ans=>1st funcion ans and undifined
// 2nd function can return value so they can only return hey not undefined

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(a);
// console.log(b);
// var a=b=5;
// Ans=>b is not defined
