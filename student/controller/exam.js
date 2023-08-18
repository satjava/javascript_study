const exams = require("../storage/exam.json")
const fs = require("fs");

class Exams {

	async addExam(new_exam){
		console.log(new_exam)
		exams.push(new_exam)
		fs.writeFile("./storage/exam.json", JSON.stringify(exams), err => {
			if (err) throw err; 
    		console.log("Exam Addess"); 
		});

		return "New Exam Added"

	}

}

module.exports = Exams;