function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
  }
  
  const employee = { name: 'Ashritha', role: 'Developer', age: 19, location: 'INDIA' };
  const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer');
  console.log(updatedEmployee);