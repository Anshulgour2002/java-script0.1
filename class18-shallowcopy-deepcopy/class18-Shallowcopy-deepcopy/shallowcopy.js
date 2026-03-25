const ob1={
    cid:1001,
    cname: "XYZ",
    info:{
        pin: 20000,
        city:"Indpre"
    }
}

console.log("org obj",ob1)
// // ob1.cid=1002;
// // console.log(ob1.cid)
// // console.log(ob1)
// //1st way by assignment change in the boyt outr and inner object
// const ob2=ob1;
// console.log("copy",ob2)
// ob2.cid=9000
// ob2.info.pin=50000


// //use sprid 

// const ob2= { ...ob1 }
// ob2.cid=1002
// console.log("f",ob2.cid)
// console.log(ob2)