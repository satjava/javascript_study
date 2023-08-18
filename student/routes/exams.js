const exams = require("../storage/exam.json")
const express = require("express")
const router = express.Router()
const examController = require("../controller/exam")
router.post('/add_exam',async (req,res)=>{
	try{
		
		const examObj = new examController();

		const new_exam = req.body

		let exams = await examObj.addExam(new_exam)
		res.send(exams)

	}
	catch(err){

		res.send(err.message)

	}
})

router.get('/exams',async (req,res)=>{
	try{
		
		
		res.send(exams)

	}
	catch(err){

		res.send(err.message)

	}
})

module.exports = router;