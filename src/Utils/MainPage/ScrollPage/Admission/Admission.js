import React from 'react';
import './Admission.css';

function Admission(){
      
      return( 
        <div className='admission'>
  <div className='adm-details'>
    <svg className='top' xmlns="http://www.w3.org/2000/svg" width="1329" height="884" viewBox="0 0 1329 884" fill="none">
           <path d="M0.445312 0.5L41.5 21H1328.44V851H41.5L0.445312 883.5V0.5Z" fill="#2A316D"/>
      </svg>

      <div class="flex-container">
        <div class="container-1">
        </div>
        <div class="container-2">
            <div class="content-1">
                <h1>ADMISSION<br/>OPEN NOW<br/>2024</h1>
            </div>
        </div>
        <div class="container-3">
            <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png" className='img-logo' alt="img-logo"/>
                <div class="department-text">DEPARTMENT OF MATHEMATICS</div>
            </div>
            <div class="divider"></div>
        </div>
        <div class="container-4">
            <div class="courses-offered">
                <div class="courses-header">COURSE OFFERED:</div>
                <div class="courses-list">
                    <span>▣ M.SC (MATHS)</span><br/>
                    <span>▣ M.SC (IMCA)</span>
                </div>
            </div>
        </div>
        <div class="container-5">
            <div class="background-shape"></div>
            <div class="image-container">
            <img
                    src="https://d3pc1xvrcw35tl.cloudfront.net/images/685x515/sppu-exam_202112740296.jpg"
                    style={{ width: "400.38px", height: "400px", opacity: 0.7 }}  alt="img"/>
            </div>
        </div>
        <div class="container-6">
            <div class="button-container">
                <div class="button-background button-text">REGISTER NOW</div>
            </div>
        </div>
        <div class="container-7">
            <div class="contact-background"></div>
            <div class="contact-info">
                <div class="contact-header">CONTACT :</div>
                <div class="contact-details">
                    <span>PHONE:</span><br/>
                    <span>020-1234-5678</span><br/>
                    <span>MAIL:</span><br/>
                    <span>ADDMISSION.UNPUNE.AC.IN</span>
                </div>
            </div>
        </div>
    </div>
  </div>

   <div className='mob-adm'>
        <svg className='tip' xmlns="http://www.w3.org/2000/svg" width="500" height="274" viewBox="0 0 300 174" fill="none">
               <path d="M0.325562 0.998779L9.58435 4.99998H299.819V167H9.58435L0.325562 173.343V0.998779Z" fill="#2A316D"/>
          </svg>

         
   </div>
  
        </div>
      )
}

export default Admission;