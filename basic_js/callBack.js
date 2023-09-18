function one(callback){
	console.log("function One")	
	callback()
}


function two(call2){
	console.log("callBack Function two")
	setTimeout(()=>{
		call2()
	},4000)
	

}

function three(call3){
	console.log("callBack Function three")
	call3()
}

one(()=>{ 
	
	two(()=>{
		three(()=>{
			console.log("all done")
		})
	})
})


