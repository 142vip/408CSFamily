

function debounce(func,time){
    let timeout
    return ()=>{
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            func.apply(this,arguments)
            // func()
        },time)
    }
}

function test(){
    console.log(new Date().getTime())
}

const debounce_test= debounce(test,1000)
debounce_test()

debounce_test()
// setTimeout(()=>{
//     dou(test,1000)
// },1500)