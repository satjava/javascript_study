const students = require("../storage/students.json")

class Students {

	async getStudent(student_id){

		let student = students.find(val=>val.student_id == student_id)
		if(student){

			return student
		}
		else {

			return "student not found"
		}

	}

	async getStudents(){
	
		if(students){
			return students
		}
		else {
			return "no students found"
		}
	
	}

	async getStudentExamDetails(student_id){

		let student = students.find(val=>val.student_id == student_id)
		if(student){

			return student.exam_details
		}
		else {

			return "student not found"
		}

	}

	async getStudentExamMarks(student_id,exam_name){
		let student = students.find(val=>val.student_id == student_id)
		if(student){

			const exam_marks = student.exam_details.find(val=>val.exam_name = exam_name )

			let total_marks_obtained = exam_marks.subjects.reduce((total,subject)=>{
				console.log(subject.obtain_marks)
				return total = total + subject.obtain_marks
			},0)

			const percentage = (total_marks_obtained/(Number(exam_marks.subjects.length)*100))*100

			/*let subject_with_percentage = exam_marks.subjects.map((subject)=>{
				subject.percentage = (subject.obtain_marks/subject.max_marks)*100
				return subject
			}) */

			//exam_marks.subjects = subject_with_percentage
			exam_marks.final_percentage = percentage

			return exam_marks
		}
		else {

			return "student not found"
		}
	}



}

module.exports = Students;
