let a = 2
let b = 3

function addTow (n,m){
	console.log(n+m)
}

setTimeout(()=>{addTow(8,9)},0) // setTime out is in timer queue and its preority high if wait time is 0 
setImmediate(()=>{addTow(6,b)}) // setImmediate are in check Queue and its priority is low with timerQeue
addTow(a,b)

// output 5 then 9

