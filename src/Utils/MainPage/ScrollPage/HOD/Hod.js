import React from 'react';
import './Hod.css';

function Hod(){
       
      return(
         <div className='hod-info'>
            <div className='hod-1'>    
             <div class="box-new">
               <div class="inbox">
                   
                <div class="about">ABOUT US</div> 
                     <div class="option">History &nbsp;&nbsp;&nbsp;&nbsp;Vision&nbsp;&nbsp;&nbsp;&nbsp;Achivements &nbsp;&nbsp;&nbsp;&nbsp;How to reach</div>
                </div>
             </div>
           </div>
            <div className='hod-2'>     

             <div class="box">

<div class="element1">
   
    </div>
    <div class="element2">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 459 426" fill="none">
            <path d="M229.639 0L458.571 425.148H0.707031L229.639 0Z" fill="#FFC5C9"/>
          </svg>
    </div>
    <div class="element3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 287" fill="none">
            <path d="M44.7464 0.78125L198.507 286.529H0.144531L44.7464 0.78125Z" fill="#F0AE70"/>
          </svg>
    </div>

  
    <div class="wrapper">
    <div class="left">
        <img src="data:image/jpeg;base64,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" alt="user" width="100" />
        <h4>Vinayak Joshi</h4>
         <p>HOD Of Department of Mathematics</p>
         <br/>

    
    </div>
    <div class="right">
        <div class="info">
            <div class="info_data">
                 <div class="data">
                    <p><b>Prof. Vinayak Joshi</b></p>
                    <p>Prof. Vinayak Joshi has taken over the charge as HOD, Department of mathematics savitribai phule pune university with effect from the forenoon of 15th February, 2022.</p>
                    <button type="button">Read More</button>

                  </div>
                 
            </div>
        
        </div>
      
        
    </div>
</div>
   
  </div>              
             </div>
         </div>
      )
}

export default Hod;