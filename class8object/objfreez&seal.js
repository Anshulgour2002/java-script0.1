//FREEZE
let ob1={
    id : 101,
    city:'Indore',
    pin:452010
}
console.log(Object.freeze(ob1))
ob1.city="ihhhhhhhndoe"










// console.log(ob1.cities)






//seal
let ob2={
    id : 101,
    city:'Indore',
    pin:452010
}
Object.seal(ob2)
ob2.city="bhodoe"
console.log(ob2)
