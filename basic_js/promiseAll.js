let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("P1 promise")
		resolve("P1")
	},3000)
})

let p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("P2 Promise")
		reject("P2")
	},1000)
})


Promise.all([p1,p2]).then((value)=>{
	console.log(value)
}).catch((err)=>{
	console.log(err)
})