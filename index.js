// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]:value
    };
}
let employee ={
    name: 'Sam',
    streetAddress: '11 Broadway'
};

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress","13 Narrowway");
console.log(updatedEmployee)




function destructivelyUpdateEmployeeWithKeyAndValue(employees, key, value){
    employees[key] = value;
    return employees;
}
let employees = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

destructivelyUpdateEmployeeWithKeyAndValue(employees, "streetAddress", "11 Broadway")
console.log(employees)



function deleteFromEmployeeByKey(employeees, key){
    const {[key]:deletedKey, ...newEmployee } = employeees;
    return newEmployee;

}
let employeees = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

let updatedEmployeee = deleteFromEmployeeByKey(employeees, "streetAddress")

console.log(employeees)




function destructivelyDeleteFromEmployeeByKey(employeeees, key){
   delete employeeees[key];
   return employeeees;
}
let employeeees = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

destructivelyUpdateEmployeeWithKeyAndValue(employeeees, "streetAddress")
console.log(employeeees);





