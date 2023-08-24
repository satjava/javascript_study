// arrow function do not have any name. we just put in any variable name

const arrFun = ()=>{
	return "arrFun"
}

const addHiName = (name)=>{
	return "Hi "+name
}

const addHelloName = (name)=>{ return "Hello "+name } // if we user {} then we have to return
const addHelloName1 = (name)=> "hello "+name // if we dont use {} then dont need to write return

console.log(arrFun("Satyendra"))
console.log(addHiName("Satyendra"))
console.log(addHelloName("Satyendra"))
console.log(addHelloName1("Satyendra"))


