const promise_1 = new Promise((resolve,reject)=>{
    let coin = true
    if (coin){
        resolve({msg: "its head"});
    }else {
        reject({msg: "its tails"});
    }
    
});
 promise_1
    .then((data)=>{
        console.log(data.msg,"its heads");
    })
    .catch((data)=>{
        console.log(data.msg,"its tail");
    });