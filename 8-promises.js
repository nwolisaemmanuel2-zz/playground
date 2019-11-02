const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(a + b)
        }, 2000)
    })
}

add(1, 5).then((sum) => {
    console.log(sum)
}).catch((e) => {
    console.log(e)
})

//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//