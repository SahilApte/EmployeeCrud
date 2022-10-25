// EditEmployee Component for update Employee data


import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

// EditEmployee Component
const EditEmployee = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	workexperience: "",
    designation:"",
    currentctc:""
});
	
//onSubmit handler
const onSubmit = (employeeObject) => {
	axios
	.put(
		"http://localhost:4000/employees/update-employee/" +
		props.match.params.id,
		employeeObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("successfully updated");
		props.history.push("/employee-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize employee form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/employees/update-employee/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, email,workexperience,designation,currentctc} = res.data;
		setFormValues({ name, email, workexperience,designation,currentctc });
	})
	.catch((err) => console.log(err));
}, []);

// Return employee form
return (
	<EmployeeForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Employee
	</EmployeeForm>
);
};

// Export EditEmployee Component
export default EditEmployee;
