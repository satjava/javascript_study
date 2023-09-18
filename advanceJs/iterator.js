let arr = [100,200,300]

let itr = arr[Symbol.iterator]();

console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())