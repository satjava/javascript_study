function mySetTimeout(func,time){
	setTimeout(()=>{
		func()
	},time)
}

function Myfun(){
	console.log("i am myFun")
}

mySetTimeout(Myfun,3000)