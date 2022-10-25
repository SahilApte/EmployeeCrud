import React, { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeForm from "./EmployeeForm";

// CreateEmployee Component
const CreateEmployee = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', workexperience: '',designation:'',currentctc:''})
// onSubmit handler
const onSubmit = employeeObject => {
	axios.post(
'http://localhost:4000/employees/create-employee',
	employeeObject)
	.then(res => {
		if (res.status === 200)
		alert('Employee data added')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return employee form
return(
	<EmployeeForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
        Create Employee
	</EmployeeForm>
)
}

// Export CreateEmployee Component
export default CreateEmployee
