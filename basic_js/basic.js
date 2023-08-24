const sampleArr = [null, 0, 1, undefined, true, false, '', 'abc'];

 






 

console.log(sampleArr.map(x => x)); [ null, 0, 1, undefined, true, false, '', 'abc' ]

console.log(sampleArr.filter(x => x)); [ 1, true, 'abc' ]

console.log(sampleArr.find(x => x)); 1

console.log(sampleArr.reduce(x => x)); null

console.log(sampleArr.some(x => x)); true

console.log(sampleArr.every(x => x)); false