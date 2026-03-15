//curring-function can splite multiple parmeter .break nested form 

// function rem(x,y){
//     return x%y;
// }
// let ans=rem(20,26)
// console.log(ans)


//second method
// function rem(x){
//    return function(y){
// return x+y
//     }
// }
// let ans1=rem(19)(8)(10)(110)
// console.log(ans1)
function rem(x){
   return function(y){
      if(y === undefined){
         return y
      }
      return x+y
   }
}

let ans1 = rem(19)(8)(10)(110)()
console.log(ans1)   
