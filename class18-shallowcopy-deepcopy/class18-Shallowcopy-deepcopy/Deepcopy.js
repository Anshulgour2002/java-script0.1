const ob1={
    cid:1001,
    cname: "XYZ",
    info:{
        pin: 20000,
        city:"Indpre"
    }
}


console.log("ob1 is",ob1)
const ob2=JSON.parse(JSON.stringify(ob1))
console.log("ob2 is",ob2)
ob2.cid=1007