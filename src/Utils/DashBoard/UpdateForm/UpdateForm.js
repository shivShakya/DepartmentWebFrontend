import React, { useState, useEffect } from "react";
import Photo from "../../Register/Photo";
import './UpdateForm.css';

function UpdateForm({userData ,setOverlayUpdate}) {
    const [formData, setFormData] = useState({
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Address: '',
        Semester: '',
        Email: '',
        Phone: '',
        Year: '',
        Position: '',
        Course: '',
        Company: '',
        Linkedin: '',
        Sector: '',
        Message: '',
        Image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/updateUserByEmail/${userData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error('Failed to update user profile');
            }
            
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleYears();
      }, []);
      function handleYears() {
        const select = document.getElementById("Year");
        for (let i = 0; i < 33; i++) {
          const option = document.createElement("option");
          option.value = 1990 + i;
          option.innerHTML = 1990 + i;
          select.appendChild(option);
        }
      }
    

    return (
        <div className='User-update' id='user-update'>
            <div className='update-form' >
                 <Photo/>
            <div>
                <div className='panels Name'> 
        <input
            type="text"
            name="FirstName"
            id="firstNameInput"
            className="form-input"
            required
            placeholder='First Name'
            value={formData.FirstName}
            onChange={handleChange}
          />
     
     
    
        <input
          type="text"
          name="MiddleName"
          id="middleNameInput"
          className="form-input"
          placeholder='Middle Name'
          value={formData.MiddleName}
          onChange={handleChange}
        />
    
    
        <input
          type="text"
          name="LastName"
          id="lastNameInput"
          className="form-input"
          required
          placeholder='Last Name'
          value={formData.LastName}
          onChange={handleChange}
        />
    </div>
    
    <div className='panels e-p-l'>
    
    <input
       type="email"
       name="Email"
       id="emailInput"
       required
       className="form-input"
       placeholder='Email'
       value={formData.Email}
       onChange={handleChange}
     />
      
   
     <input
       type="text"
       name="Phone"
       id="phoneInput"
       className="form-input"
       placeholder='Phone'
       value={formData.Phone}
       onChange={handleChange}
     />

   <input
       type="text"
       name="Linkedin"
       id="linkedinInput"
       required
       className="form-input"
       placeholder='Linkdin'
       value={formData.Linkedin}
       onChange={handleChange}
     />
 
  </div>

   <div className={`panels p-c-s `} style={{display : userData.Role === 'Alumni' ? 'flex' : 'none'}}>
     <input
          type="text"
          name="Position"
          id="positionInput"
          className="form-input"
          placeholder='Position'
          value={formData.Position}
          onChange={handleChange}
    />

       <input
          type="text"
          name="Company"
          id="companyInput"
          className="form-input"
          placeholder='Company'
          value={formData.Company}
          onChange={handleChange}
        />

    <select
           name="Sector"
           id="sectorInput"
           className="form-input"
           value={formData.Sector}
           onChange={handleChange}
        >
       <option value="">Select Sector</option>
       <option value="IT">IT</option>
       <option value="Data Science">Data Science</option>
       <option value="Teaching">Teaching</option>
       <option value="Others">Others</option>
    </select>      
    </div>

    <div  className={`panels p-c-s`} style={{display : userData.Role === 'Teacher' ? 'none' : 'flex'}}>
     <select
           name="Semester"
           id="semesterInput"
           className={`form-input ${userData.Role === 'Alumni' ? 'hidden' : ''}`}
           value={formData.Semester}
           onChange={handleChange}
      >
       <option value="">Select Semester</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
     </select>

     <select
             name="Course"
             id="courseInput"
             className="form-input"
             value={formData.Course}
              onChange={handleChange}
     >
       <option value="">Select Course</option>
       <option value="Mathematics">Mathematics</option>
       <option value="IMCA">IMCA (Industrial Mathematics and Computer Applications)</option>
     </select>

      <select name="Year" id="Year"  className="form-input" value={formData.Year}  onChange={handleChange}>
        </select>
    </div>
    <div className='panels addr'>
   <textarea
          type="text"
          name="Address"
          id="addressInput"
          rows={5}
          className="form-input"
          placeholder='Address'
          value={formData.Address}
          onChange={handleChange}
    ></textarea>
     <textarea
          type="text"
          name="Message"
          id="messageInput"
          rows={5}
          required
          className="form-input"
          placeholder='Your message'
          value={formData.Message}
          onChange={handleChange}
    ></textarea>
   </div>
                <button onClick={handleSubmit} >Update</button>
                <button onClick={()=>{setOverlayUpdate(false)}}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;
