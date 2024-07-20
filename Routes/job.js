const express = require("express")
const jobController = require("../Controller/job")

const router = express.Router()

router.post("/api/jobs", jobController.createJob)

router.get("/api/jobs", jobController.getJob)

router.put("/api/jobs/:id", jobController.updateJob)

router.delete("/api/jobs/:id", jobController.deleteJob)

module.exports = router;