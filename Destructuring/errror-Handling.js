let x=10
let y=10
console.log(x+y)
//second way
function add(x,y){
    console.log(x+y);
}
add(10,200)
//third way
function add(x,y){
    try{
        console.log(x+y)
    }
    catch(e){
        console.log(e)
    }
}
add(10,300)
//fourth way

function add(x,y){
    try{
        if((typeof(x)!==Number)&&(typeof(y)!==Number)){
            throw("X and Y is not number type")
        }
        console.log(x+y)
    }
    catch(err){
        console.log(err)
    }
}

add(2,3);
add(2,"hello")