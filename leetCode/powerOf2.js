function isPowerOfTwo(Value){
	if(Value == 0){
		return false
	}
	while(Value % 2 == 0){

		Value = Value / 2

	}
	return Value == 1
}

console.log(isPowerOfTwo(12))