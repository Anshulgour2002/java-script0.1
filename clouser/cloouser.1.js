function printvalue(){
    let x=10;
    return function()
    {
        x++
        console.log(x)
    }
}

let op = printvalue()
op()
op()
op()
op()
op=null//after they can null the memory