import React from 'react';
import { useNavigate } from 'react-router-dom';

function Form(){

      const nav = useNavigate();
      
      return(
        <div className='alumni-mat'>  
         <div className='alm-form'> 
              <div className='design'>
                <svg xmlns="http://www.w3.org/2000/svg" width="462" height="955" viewBox="0 0 462 955" fill="none">
                      <g filter="url(#filter0_d_163_401)">
                                  <path d="M76.8597 804.612C76.8597 1040.41 612.257 886.877 388.199 886.877C164.14 886.877 0 986.608 0 750.809C0 515.01 123.737 0 347.795 0C430.541 56.9268 76.8597 568.813 76.8597 804.612Z" fill="#6D5B5B"/>
                      </g>
                     <defs>
                          <filter id="filter0_d_163_401" x="0" y="0" width="462" height="955" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset dx="15" dy="15"/>
                               <feGaussianBlur stdDeviation="2"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_401"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_401" result="shape"/>
                          </filter>
                      </defs>
                  </svg>
             </div>
              <div className='form'>
                <div className='warning'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="204" height="25" viewBox="0 0 204 25" fill="none">
                         <path d="M0.496094 12.1696C0.496094 5.48735 5.91313 0.0703125 12.5954 0.0703125H101.941H191.288C197.97 0.0703125 203.387 5.48735 203.387 12.1696V12.1696C203.387 18.8518 197.97 24.2689 191.288 24.2689H12.5954C5.91312 24.2689 0.496094 18.8518 0.496094 12.1696V12.1696Z" fill="#A02424"/>
                   </svg>
             </div>
                     <div className='info'>Please fill your Details here...</div>
                     <button className='al-btn' onClick={()=> nav('/Alumni')}>Click here</button>
              </div>
         </div>
   </div>
      )
}

export default Form;