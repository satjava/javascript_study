const express = require("express")

const router = express.Router()

const studenController = require("../controller/students")

router.get('/students',async (req,res)=>{

	try{
		const stuObj = new studenController();
		let students = await stuObj.getStudents()
		res.send(students)

	}
	catch(err){

		res.send(err.message)

	}

	
})

router.get('/student/:student_id',async (req,res)=>{

	try{
		const {student_id} = req.params
		const stuObj = new studenController();
		let students = await stuObj.getStudent(student_id)
		res.send(students)

	}
	catch(err){

		res.send(err.message)

	}
})

router.get('/student_exam_details/:student_id',async (req,res)=>{

	try{
		const {student_id} = req.params
		const stuObj = new studenController();
		let students = await stuObj.getStudentExamDetails(student_id)
		res.send(students)

	}
	catch(err){

		res.send(err.message)

	}
})

router.get('/student_exam_marks/:student_id/:exam_name',async (req,res)=>{

	try{
		const {student_id,exam_name} = req.params
		const stuObj = new studenController();
		let students = await stuObj.getStudentExamMarks(student_id,exam_name)
		res.send(students)

	}
	catch(err){

		res.send(err.message)

	}
})

module.exports = router
