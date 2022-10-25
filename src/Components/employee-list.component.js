import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmployeeTableRow from "./EmployeeTableRow";
import SearchEmployees from "./SearchEmployee/SearchEmployees";

const EmployeeList = () => {
const [employees, setEmployees] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/employees/")
	.then(({ data }) => {
		setEmployees(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return employees.map((res, i) => {
	return <EmployeeTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<h1>Employees</h1>
		{/* <SearchEmployees SearchEmployees={this.searchEmployees}/> */}
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Work Experience</th>
            <th>Designation</th>
            <th>Current CTC</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default EmployeeList;
