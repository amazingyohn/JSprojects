function func1(callback){
    setTimeout(()=>{
        console.log('this is function 1 being executed first'); callback()
    }, 5000)
}

function func2(){
    console.log('this is function two 🚀')
}

func1(func2)