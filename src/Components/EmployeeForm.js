import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const EmployeeForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
    workexperience: Yup.number().moreThan(-1),
	// .positive("Invalid number"),
	// .integer("Invalid number")
	// .required("Required"),
	designation: Yup.string()
	.required("Required"),
	currrentctc: Yup.number()
	.positive("Invalid number")
	.integer("Invalid number")
	// .required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<label>Name</label>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<label>Email</label>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<label>Work Experience(in years)</label>
			<Field name="workexperience" type="number"
				className="form-control" />
			<ErrorMessage
			name="workexperience"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
			<label>Designation</label>
			<Field name="designation" type="text"
				className="form-control" />
			<ErrorMessage
			name="designation"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<label>Current CTC (in LPA)</label>
			<Field name="currentctc" type="text"
				className="form-control" />
			<ErrorMessage
			name="currentctc"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<br></br>
		<div class="text-center">

		<Button variant="danger" size="lg"
			block="block" type="submit" alig>
			{props.children}
		</Button>
				</div>
		</Form>
	</Formik>
	</div>
);
};

export default EmployeeForm;
