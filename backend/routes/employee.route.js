let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Employee Model
let employeeSchema = require("../models/Employee");

// CREATE Employee
router.post("/create-employee", (req, res, next) => {
employeeSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Employees
router.get("/", (req, res) => {
employeeSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE employee
router.route("/update-employee/:id")
// Get Single Employee
.get((req, res) => {
	employeeSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Employee Data
.put((req, res, next) => {
	employeeSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Employee updated successfully !");
		}
	}
	);
});

// Delete Employee
router.delete("/delete-employee/:id",
(req, res, next) => {
employeeSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;