function compose(fn2,fn1){
    if(fn1&&fn2){
        return function(firstName, lastName){
            return fn2(fn1(firstName, lastName)) 
        }
    }
}