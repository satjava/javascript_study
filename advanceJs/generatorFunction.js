function* createAwb(){
	let i = 1 
	while(true){
		yield "SHYPMX00023410-"+i 
		i++
	}
}

let newAwb  = createAwb()

console.log(newAwb.next().value)
console.log(newAwb.next().value)
console.log(newAwb.next().value)
console.log(newAwb.next().value)