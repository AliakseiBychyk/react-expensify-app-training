const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    // resolve('this is my resolved data')
    reject('something went wrong')
  }, 4500)
})

console.log('before')

promise.then((data)=> {
  console.log('1', data)
}).catch((err)=> {
  console.log(err)
})


console.log('after')