const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
workexperience: {
	type: Number
},
designation: {
    type: String
},
currentctc:{
    type: Number
}
}, {
	collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema)