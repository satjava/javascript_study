const obj = {
	"name":"satyendra",
	"mobile": 9889701128
}

const array = [30,49,60,70]

let [one,two,...other] = array 

let {name,mobile} = obj 

console.log(one)
console.log(two)
console.log(other)
console.log(name)
console.log(mobile)