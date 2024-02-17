import React,{useState} from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';


function LoginPage(){
      const nav = useNavigate();
      const url = process.env.REACT_APP_BACKEND;
      const [role, setRole] = useState('');
      const [Email , setEmail] = useState('');
      const [password ,setPassword] = useState('');
      const [formStep, setFormStep] = useState(1);
      const [forEmail , setForEmail] = useState('');
      const [showOverlay, setShowOverlay] = useState(false);
      const [genOTP , setGenOTP] = useState(null);
      const [userOTP , setUserOTP] = useState(null);
      const [verified ,setVerified] = useState(false);
      const [newPassword ,setNewPassword] = useState('');
      const [confPassword , setConfPassword] = useState('');

     function handleRole() {
      const selectedRole = document.querySelector('input[name="roles"]:checked');

      if (selectedRole) {
        setRole(selectedRole.value);
        setFormStep(2);
      } else {
        alert('Please select a role.');
      }
}

    function handleReg(){
        if (role && role !== 'Admin') {
                nav(`/register/?Role=${role}`);
          } else {
               alert('Please select a role.');
          }
    }

    async function handleSubmit() {
      const loginCred = {
          'Email': Email,
          'password': password,
          'role': role,
      };
      console.log({loginCred});
  
      try {
         alert('wait for some time if nothing is happening. its due to network');
          const response = await fetch(`http://localhost:5000/user/login`, {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(loginCred),
          });
  
          if (!response.ok) {
              console.log(response);
          }
  
          const result = await response.json();
          alert(result.message);
          console.log({ 'message': result.message });

          if(result.token){
            localStorage.setItem('token', result.token);
            nav(`/DashBoard`);
          }

          setRole('');
          setEmail('');
          setPassword('');
          window.location.reload();


      } catch (err) {
          console.error('Error:', err);
      }
  }

  async function handleEmail(){
        console.log("Handle Email is called");
         try{
              const response = await fetch(`http://localhost:5000/varification/emailVarification`,{
                   method : 'POST',
                   headers : {
                      'Content-Type' : 'application/json'
                   },
                   body : JSON.stringify({ Email: forEmail })
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

  async function handleForgetPassword(){
     try{
          const response = await fetch(`http://localhost:5000/varification/forgetPassword`,{
               method : 'POST',
               headers : {
                  'Content-Type' : 'application/json'
               },
               body : JSON.stringify({forEmail , newPassword , confPassword })
          });

          const result = await response.json();
          alert(result.message);

     }catch(err){
           console.log(err);
     }
}

  const handleOTP = async() =>{
    try{
        console.log({userOTP , genOTP});

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
       setShowOverlay(true);
   }

    }catch(err){
         console.log(err);
    }
}


   
    
  

      return(

        <><div className='User-login' id='user-register'>
            
                  {formStep === 1 ? (

                  <div className='form-container' id='form-container'>
                       <div className='inst-box'>
                                 This is an official website for Department of mathematics , Savitribai Phule Pune University .<br/>
                                 Account Registration and login here is for the the people within the department and our beloved Alumni <br/>
                                 Account Creation be someone outside the trajectory will get notified. So be resposible while making and account<br/>
                        </div>
                          <div name="Sectors" id="Sectorss" >
                          <div className='role-head'>Choose your role</div>
                              <div className='role-a alum'>
                                  <div className='roles' for="Alumni">Alumni</div>
                                  <input type='radio' name='roles' className='radios' id='Alumni' value='Alumni' />
                              </div>
                              <div className='role-a teach'>
                                  <div className='roles' for="Teacher">Teacher</div>
                                  <input type='radio' name='roles' className='radios' id='Teacher' value='Teacher' />
                              </div>
                              <div className='role-a std'>
                                  <div className='roles' for="Student">Student</div>
                                  <input type='radio' name='roles' className='radios' id='Student' value='Student' />
                              </div>
                              <div className='role-a admin'>
                                  <div className='roles' for="Admin">Admin</div>
                                  <input type='radio' name='roles' className='radios' id='Admin' value='Admin' />
                              </div>

                              <div>
                                  <i className='nav-btns' onClick={handleRole}> next </i>
                              </div>
                          </div>
                 </div>
                  ) : (

                      <div className='form-container' id='form-container'>

<div className='inst-box'>
This is the official website for the Department of Mathematics, Savitribai Phule Pune University.

Account registration and login here are for the individuals within the department and our esteemed alumni.

Creating an account by someone outside the department will trigger a notification. Therefore, please be responsible while creating an account.

                        </div>
                          <div className="fields">
                                 <div className='role-head'>Enter Your Credentials</div>
                                  <input type="text" className='cred' id='e-mail' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}  required />
                                   <input type="text" className='cred' id='pass-word' placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}  required />  
                                   <button className='login-btn' onClick={handleSubmit}>Submit</button>
                                  <div>Forgot your password ? <b onClick={()=> { setShowOverlay(true)}}>Click here</b></div>
                                  {showOverlay && (
            <div className="overlay">
                    <div className='overlay-content'>
                        <div style={{display : verified ? 'none' : 'block'}}>
                             <div>
                                  <input type='email' onChange={(e)=>{setForEmail(e.target.value)}} placeholder='Enter your Registered Email'  />
                                  <button onClick={handleEmail}>Submit</button>
                             </div>
                            <div>
                                 <input type= 'number' placeholder='Enter your otp'  onChange={(e)=> setUserOTP(e.target.value)}/>
                                  <button onClick={handleOTP}>Submit</button>
                            </div>
                             
                        </div>
                        <div style={{display : verified ? 'block' : 'none'}}>
                               <input type='password' placeholder='New Password' onChange={(e)=>{setNewPassword(e.target.value)}} />
                               <input type='password' placeholder='Confirm New Password' onChange={(e)=> {setConfPassword(e.target.value)}} />
                               <button onClick={handleForgetPassword}> Submit </button>
                        </div>
                        <div className='overlay-btns'> 
                                <button onClick={() => setShowOverlay(false)}>Close</button>
                        </div>
                    </div>
            </div>
          )}
                                  <div>
                              <i className='nav-btns' onClick={() => setFormStep(1)}>back</i>
                          </div>

                          </div>

                        

                      </div>

                  )}
              </div>

          <div className='nav-btn'>
                  <div className='nav-btns' onClick={() => nav('/')}>Go back</div>
                  <div className='adj'></div>
                  {formStep === 2 ? (
                          role !== 'Admin' ? <div className='nav-btns' onClick={handleReg}> Register</div> : <div></div>
                  ) : (
                      <div></div>
                  )}
              </div></>
                                          
    
    
      )
}

export default LoginPage;