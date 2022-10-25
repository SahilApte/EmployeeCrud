import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeTableRow = (props) => {
const { _id, name, email, workexperience,designation,currentctc } = props.obj;

const deleteEmployee = () => {
	axios
	.delete(
"http://localhost:4000/employees/delete-employee/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Employee removed");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{workexperience}</td>
	<td>{designation}</td>
	<td>{currentctc}</td>
	<td>
	
	{/* <button onClick={ () => removeEmployee(_id) } className="Action-Button fa fa-trash"></button> */}
		<Link className="edit-link"
		to={"/edit-employee/" + _id}>
		Edit
		</Link>

		<Button onClick={deleteEmployee}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default EmployeeTableRow;
