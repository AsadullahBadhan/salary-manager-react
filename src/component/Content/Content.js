import React from 'react';
import './Content.css'
import Users from '../Users/Users';
import userData from '../../userData/userData';
import Summary from '../Summary/Summary';
import { useState } from 'react';


const Content = () => {
    const user = userData;
    const [employee, setEmployee] = useState([]);

    const handlePayment = (user) => {
        const newEmployee = [...employee, user];
        setEmployee(newEmployee);

    };

    return (
        <div className="container">
            <div className="user-list">
                <ul>
                    {
                        user.map(user => <Users
                            user={user}
                            handlePayment={handlePayment}
                        ></Users>)
                    }
                </ul>
            </div>
            <div className="summary">
                <Summary
                    user={user}
                    employee={employee}
                >
                </Summary>
            </div>
        </div>
    );
};

export default Content;