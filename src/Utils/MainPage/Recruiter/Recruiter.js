import React, { useState } from 'react';
import './recruit.css';

function Recruiter({ onClose }) {
    const url = process.env.REACT_APP_BACKEND;
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.company || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }
        
        try {
            const response = await fetch(`${url}/mail/sendEmailToAdmin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log("Response status:", response.status);
            const responseData = await response.json(); 
            console.log("Response data:", responseData);
            if (response.ok) {
               alert(responseData.message);
            } else {
               alert("Server returned an error.");
            }
        } catch (error) {
            console.error("Error occurred during fetch:", error);
            alert("An error occurred while sending the message.");
        }
        onClose();
    };
    

    return (
        <div className='overlay'>
            <div className='recruite'>
                <h2><b>Recruiter's Corner</b></h2>
                <input required type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
                <input required type='text' name='company' placeholder='Company' value={formData.company} onChange={handleChange} />
                <input required type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                <textarea required rows={10} cols={30} name='message' placeholder='Your message' value={formData.message} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Recruiter;
