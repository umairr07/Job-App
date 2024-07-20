const jobModel = require("../Model/job")

const createJob = async (req, res) => {
    console.log(req.body)
    try {
        const response = await jobModel.create(req.body)
        console.log(response)
        res.json({
            success: true,
            message: "Create job api working"
        })
    } catch (err) {
        console.log(err)
        res.status((500).json({
            success: false,
            message: "Something went wrong",
        }))
    }
}

const getJob = async (req, res) => {
    try {
        // let minSalary = req.query.minSalary;
        // let getJobs = await jobModel.find({
        //     salary: {
        //         $gt: minSalary
        //     }
        // })
        let getJobs = await jobModel.find()
        res.json({
            success: true,
            message: "Get Job api working",
            results: getJobs,
        })
    } catch (err) {
        console.log(err)
        res.status((500).json({
            success: false,
            message: "Something went wrong",
        }))
    }
}

const updateJob = async (req, res) => {
    try {
        let id = req.params.id;
        // console.log(id)

        const filterObj = {
            salary: 75000
        }
        const updateField = {
            $set: req.body
        }


        // const update = await jobModel.findByIdAndUpdate(id, updateField) //max update only one record as it is using id

        const update = await jobModel.updateMany(filterObj, updateField) // use when we have to many multiple records
        res.json({
            success: true,
            message: "updateJob api working"
        })
    } catch (err) {
        console.log(err)
        res.status((500).json({
            success: false,
            message: "Something went wrong",
        }))
    }
}

const deleteJob = async (req, res) => {
    const id = req.params.id;
    const deleteById = await jobModel.findByIdAndDelete(id)
    console.log(id)
    res.json({
        success: true,
        message: "deleteJob api working",
        deletedId: deleteById
    })
}


const jobController = {
    createJob,
    getJob,
    updateJob,
    deleteJob
}

module.exports = jobController;

