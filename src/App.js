// Import React
import React from "react";
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateEmployee from
	"./Components/create-employee.component";
import EditEmployee from
	"./Components/edit-employee.component";
import EmployeeList from
	"./Components/employee-list.component";
// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-employee"}
				className="nav-link">
				Employee Information Protocol
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-employee"}
					className="nav-link">
					Create Employee
				</Link>
				</Nav>

				<Nav>
				<Link to={"/employee-list"}
					className="nav-link">
					Employee List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route path='/'
					element={<EmployeeList/>} />
				</Routes>
				<Routes>

				<Route path='/create-employee'
					element={<CreateEmployee/>} />
				</Routes>
				<Routes>

				<Route path='/edit-employee/:id'
					element={<EditEmployee/>} />
				</Routes>
				<Routes>
				<Route path='/employee-list'
					element={<EmployeeList/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
