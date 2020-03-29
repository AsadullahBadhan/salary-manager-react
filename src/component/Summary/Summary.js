import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const totalEmployee = props.user.length;
    const employeeList = props.employee;
    const salaryPaid = employeeList.length;

    const totalSalary = employeeList.reduce((total, employee) => total + employee.salary, 0);
    console.log(employeeList);
    return (
        <div className="summary">
            <h2>Salary Summary</h2>
            <hr />
            <p>Total Employee: {totalEmployee}</p>
            <p>Salary Paid: {salaryPaid}</p>
            <p>Payment Left: {totalEmployee - salaryPaid}</p>
            <p>Total Salary Paid: ${totalSalary}</p>
        </div>
    );
};

export default Summary;