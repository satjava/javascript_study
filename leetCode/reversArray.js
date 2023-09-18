function reversArray(input){

	let left = 0 
	let right = input.length - 1

	while(left < right){
		
		let temp = input[left]
		input[left] = input[right]
		input[right] = temp 

		left++
		right--
	}
	return input
}

console.log(reversArray(['s','a','t','y','e']))