const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
	
	res.send("NODE-API root")
})

app.listen(port,()=>{
	console.log(`Node API running on port${port}`)
})