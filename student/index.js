/*
1. get students
2. get specific student
3. get student exam details(all exam appeard)
4. get exam marks(with subject like report card(percentage, rank and other info))
5. create a new exam

*/


const express = require("express")
const app = express()
const port = 3001
const path = require('path')
const router = require("./routes")
app.use(express.json());
app.use(router.students);
app.use(router.exams);

app.listen(port,()=>{
	console.log("api is running on nodejs")
})