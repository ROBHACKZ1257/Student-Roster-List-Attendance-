const Student = require('../models/studentsModel')
// const {id } = useParams()

//INDUCES
module.exports.index = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: 1 })
        res.status(200).json(students)
    } catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}
module.exports.show = async (req, res) => {
    console.log(req.params.id, 'ids')
    try {
        const students = await Student.findById(req.params.id)
        console.log(students)
        res.status(200).json(students)
    } catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    // if(req.body.present === 'on'){
    //     req.body.present = true
    //   }else{
    //     req.body.present = false
    //   }
    try{
        const student = await Student.create(req.body)
        console.log(student)
        res.status(200).json(student)
    }catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id)
        console.log('student is deleted')
        res.status(200).json({ message: 'successfully deleted' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}
