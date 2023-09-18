

for(let i = 1 ;i<=100;i++){
	let f = true;
	for(let j = 2; j < i;j++){
		if(i%j == 0){
			f = false
		}
		
	}
	if(f == true){
		console.log(i)
	}
	

}
console.log([1,2,3,4,5,6,7,8,9,10].map(d => d > 5));

const x = {a: 1, b:2}

const y = x

y.a = 4

console.log(x.a)

