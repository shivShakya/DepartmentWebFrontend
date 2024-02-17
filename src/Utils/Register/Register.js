import React, { useState , useEffect } from 'react';
import './Register.css';
import Photo from './Photo';
import {useNavigate} from 'react-router-dom';
import { useImageContext } from './MyContext'; 

function Register() {
  const initialData = {
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
    Password: '',
    ConfirmPassword: '',
    Message: ''
  };
  
  const nav = useNavigate();
  const [Role, setRole] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [genOTP , setGenOTP] = useState(null);
  const [userOTP , setUserOTP] = useState(null);
  const [verified ,setVerified] = useState(false);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const firstParam = searchParams.entries().next().value; 
    const role = firstParam ? firstParam[1] : ''; 

    if(role === ''){
            nav('/login');
    }
    setRole(role);
  }, []);
  

  const [formData, setFormData] = useState(initialData);
  const { imageBlob } = useImageContext();
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 async function handleVerify(){
    try{
      const response = await fetch("http://localhost:5000/varification/emailVarification",{
           method : 'POST',
           headers : {
              'Content-Type' : 'application/json'
           },
           body : JSON.stringify({ 'Email' :formData.Email })
      });
          const result = await response.json();
          alert(result.message);

          if(response.ok){
               setShowOverlay(true);
               setGenOTP(result.generatedOTP);  
          }
 }catch(err){
       console.log(err);
 }
}

 const handleOTP = async() =>{
        try{

          const response = await fetch("http://localhost:5000/varification/otpMatch",{
            method : 'POST',
            headers : {
               'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ 'userOTP' : userOTP , 'generatedOTP' : genOTP })
       });

       const data =  await response.json();
       alert(data.message);

       if(response.ok){
           setVerified(true);
           setShowOverlay(false);
       }

        }catch(err){
             console.log(err);
        }
  }


  const handleSubmit = async (e) => {
   //      if(verified){
                   
    e.preventDefault();
    alert('wait');
    const formDataFinal = new FormData();
    console.log({imageBlob});

      for (const key in formData) {
      formDataFinal.append(key, formData[key]);
    }
    formDataFinal.append('Role', Role);
    formDataFinal.append('image', imageBlob);
    
    try {
      const response = await fetch('http://localhost:5000/user/postUser', {
        method: 'POST',
        body: formDataFinal
      });
  
      if (!response.ok) {
        console.log({response});
      }else{   
             setFormData(initialData);
             nav('/login');
      }
      const data = await response.json();
      alert(data.message);
  
    
    } catch (error) {
      alert(error.error);
    }
// }else{
 //    alert("Please Verify your email");
// }
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


  console.log(Role);

  return (
    <div className='User-register' id='user-register'>
      <div className='form-container' id='form-container'>
        
        <div className="drag-drop-container">
              <div className="drag-drop-text" >Upload your Image<Photo />Drag and drop or click</div>
        </div>

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
          placeholder='Linkedin'
          value={formData.Linkedin}
          onChange={handleChange}
        />
    
     </div>

     <div className={`panels p-c-s `} style={{display : Role === 'Alumni' ? 'flex' : 'none'}}>
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
       
     <div  className={`panels p-c-s`} style={{display : Role === 'Teacher' ? 'none' : 'flex'}}>
     <select
           name="Semester"
           id="semesterInput"
           className={`form-input ${Role === 'Alumni' ? 'hidden' : ''}`}
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
    

    <div className='panels p-b-c'>
       <input
          type="password"
          name="Password"
          id="passwordInput"
          className="form-input"
          required
          placeholder='Password'
          value={formData.Password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="ConfirmPassword"
          id="confirmPasswordInput"
          required
          className="form-input"
          placeholder='Confirm Password'
          value={formData.ConfirmPassword}
          onChange={handleChange}
        />
       </div>
       <button onClick={handleSubmit} className="submit-button" id="submit-button">Submit</button>
             </div>
             
    </div>
    <div>
          <button className='nav-btns' onClick={()=>{nav('/login')}}>go back </button>
    </div>
  
    </div>
  );
}

export default Register;
