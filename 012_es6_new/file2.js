//var let  const
//var 
for(var i=0;i<10;i++){
    // console.log(i)
    setTimeout(function(){
        console.log('the number is' + i);
    },1000)
}

//let 
for(let i =0;i<10;i++){
    setTimeout(()=>{
        console.log('the number is' + i)

    },1000)
}