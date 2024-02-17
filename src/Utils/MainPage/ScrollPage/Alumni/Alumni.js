import React from 'react';
import './Alumni.css';
import Form from './Form';
import { useNavigate } from 'react-router-dom';


function Alumni(){
      
      const nav = useNavigate();

       return(
           <><div className='almuni-main'>
               <div className='alm-info'>
                   <div className='alm-tag'>Alumni Page</div>
                   <div className='al-content'>
                       Our alumni are a testament to the power of education
                       and determination. Their success stories continue to
                       inspire current and future generations of mathematicians.
                   </div>
               </div>
               <div className='hod-message'>
                   <div className='hod-text'>
                       Dear Esteemed Alumni, Your remarkable
                       achievements are a testament to the excellence of our mathematics
                       department. We're excited to create a bridge between your success
                       and the aspirations of our current students. To make this connection
                       even stronger, we kindly ask you to spare a moment to complete this
                       form. Your valuable data will serve as a wellspring of
                       motivation for our budding mathematicians. Your support and involvement
                       are deeply appreciated, and we believe your experiences will leave an
                       indelible mark on our department's legacy<hr />With warm regards, <hr />Vinayak
                       Joshi <hr /> Head of the Department of Mathematics
                   </div>
               </div>

               <Form />
           </div><div className="mobile-design">
                   <div className="content-mob">
                       <div><b>Alumni</b></div>
                       <div>Our alumni are a testament to the power of education
                           and determination. Their success stories continue to
                           inspire current and future generations of mathematicians.
                       </div>
                   </div>

                   <div className="form-box">
                       <div className="stylish-frame">
                           <svg xmlns="http://www.w3.org/2000/svg" width="280" height="487" viewBox="0 0 280 487" fill="none">
                               <g filter="url(#filter0_d_1_670)">
                                   <path d="M45.283 402.306C45.283 520.205 360.72 443.439 228.713 443.439C96.7056 443.439 0 493.304 0 375.405C0 257.505 72.9012 0 204.908 0C253.66 28.4634 45.283 284.407 45.283 402.306Z" fill="#6D5B5B" />
                               </g>
                               <defs>
                                   <filter id="filter0_d_1_670" x="0" y="0" width="280" height="487" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                       <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                       <feOffset dx="15" dy="15" />
                                       <feGaussianBlur stdDeviation="2" />
                                       <feComposite in2="hardAlpha" operator="out" />
                                       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_670" />
                                       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_670" result="shape" />
                                   </filter>
                               </defs>
                           </svg> 
                       </div>
                       <div className="form-style">
                           <div className='only-alm'>Only for Alumni</div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="159" height="21" viewBox="0 0 159 21" fill="none">
                                        <path d="M0.393433 10.5741C0.393433 5.11732 4.81703 0.693726 10.2738 0.693726H79.3278H148.382C153.839 0.693726 158.262 5.11732 158.262 10.5741V10.5741C158.262 16.0309 153.839 20.4545 148.382 20.4545H10.2738C4.81705 20.4545 0.393433 16.0309 0.393433 10.5741V10.5741Z" fill="#A02424"/>
                          </svg>
                           <div className='info-det'>Please fill your Details here...</div>
                           <button className='click-here'  onClick={()=> nav('/Alumni')}>Click here</button>
                       </div>
                   </div>
               </div></>
       
       )
}

export default Alumni;