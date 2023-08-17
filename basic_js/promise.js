function fun1(){

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("fun1")
		},1000)
	})
} 

function fun2(){

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("fun2")
		},2000)
	})
} 

function fun3(){

	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("fun3")
		},3000)
	})
} 

// way one
fun3().then((value)=>{
	console.log("resolve->",value)
	fun2().then((fun2)=>{
		console.log("resolve->",fun2)
		fun1().then((fun1)=>{
			console.log("resolve->",fun1)
		})
	})
}).catch((err)=>{
	console.log("Err->",err)
})

// way 2
async function callAll(){
	let one = await fun3()
	console.log(one)
	let two = await fun2()
	console.log(two)
	let three = await fun1()
	console.log(three)
}
callAll()