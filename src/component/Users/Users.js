import React from 'react';
import './Users.css'
import { useState } from 'react';

const Users = (props) => {
    //console.log(props);
    const [isPaid, setIsPaid] = useState(false);
    let paymentButton = <button className="pay-btn" onClick={() => { props.handlePayment(props.user); setIsPaid(true) }}><span>+</span> Pay</button>

    if (isPaid) {
        paymentButton = <button className="paid" disabled>Paid</button>
    }

    const { img, name, phone, email, salary } = props.user;
    return (
        <div className="user-container">
            <div className="user-img">
                <img src={img} alt={name} />
            </div>
            <div className="user-description">
                <h2>Name: {name}</h2>
                <p>Phone: {phone}</p>
                <p>E-mail: {email}</p>
                <p>Annual Salary: ${salary}</p>
                {paymentButton}
            </div>
        </div>
    );
};

export default Users;