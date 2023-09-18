function findTargeSum(input,target) {
	let arrMap = new Map(input.map((value,index)=>[index,value]))
	let result 
	arrMap.forEach((v,k)=>{
		if([...arrMap.values()].includes(target - v) && [...arrMap.values()].indexOf(target - v) != k){
			result = []
			result.push(k)
			result.push([...arrMap.values()].indexOf(target - v))
			return result
		}
	})
	return result
	
}

let result = findTargeSum([2,6,3,5,7,4],12)
console.log(result)
