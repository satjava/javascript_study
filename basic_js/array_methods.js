let array = [7,`h`,86,9,0]

let filterArr = array.filter(x => x < 5)
let findArr = array.find(x => x < 5)
let reduceArr = array.reduce((x,v) => x)

console.log(filterArr)
console.log(findArr)
console.log(reduceArr)