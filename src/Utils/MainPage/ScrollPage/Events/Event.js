import React from 'react';
import './Event.css';

function Event(){
       return(
          <><div className='desktop-design-eve'>
               <div class="box2">
                   <div class="box1">
                       <div class="box3">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 805 804" fill="none">
                               <path d="M0 0H804.755L573.134 638.315C537.253 737.196 443.316 803.04 338.127 803.04H0V0Z" fill="#5A657B" />
                           </svg>
                       </div>
                       <div class="box4">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 821 767" fill="none">
                               <path d="M814.953 766.453L0.00101501 759.431L201.813 248.693C236.326 161.348 253.583 117.675 282.054 85.1648C310.57 52.6031 347.066 28.0198 387.965 13.8236C428.801 -0.350394 475.778 0.0543783 569.733 0.863922L820.521 3.0248L814.953 766.453Z" fill="#863D3D" />
                           </svg>
                       </div>

                   </div>

               </div>
               <button class=" event-button"> Events </button>
               <div class="main-screen">
                   <div class="image"> </div>
                   <div class="invitation">
                       <p>Hey there!<span class="emoji leaf"> &#x1F33F</span></p>
                       <p>I hope this message finds you well.
                           I wanted to invite you to a special event
                           - our Fresh Air Party! It's going to be an
                           amazing outdoor gathering filled with fun
                           activities, great food, and even better company.
                       </p>
                   </div>
               </div>

           </div><div className='mobile-deisgn-eve'>
                   <div class="box2">
                       <div class="box1">
                           <div class="box3">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 805 804" fill="none">
                                   <path d="M0 0H804.755L573.134 638.315C537.253 737.196 443.316 803.04 338.127 803.04H0V0Z" fill="#5A657B" />
                               </svg>
                           </div>
                           <div className='screen'>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275 175" fill="none">
                                   <path d="M0 0H275V175H0V0Z" fill="white" />
                               </svg>
                           </div>
                           <div class="box4">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 821 767" fill="none">
                                   <path d="M814.953 766.453L0.00101501 759.431L201.813 248.693C236.326 161.348 253.583 117.675 282.054 85.1648C310.57 52.6031 347.066 28.0198 387.965 13.8236C428.801 -0.350394 475.778 0.0543783 569.733 0.863922L820.521 3.0248L814.953 766.453Z" fill="#863D3D" />
                               </svg>
                           </div>

                       </div>

                   </div>
               </div></>              
       )
}

export default Event;