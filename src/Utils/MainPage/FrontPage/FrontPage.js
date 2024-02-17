import React from 'react';
import './FrontPage.css';

function FrontPage(){

       return(
           <div className='front'>
                    <div className='front-page' id='front-div'>
                       <div className='div-left'>
                             <div className='div-wel'> Welcome to </div>
                             <div className='div-head'>Department Of Mathematics</div>
                             <div className='div-sppu'>SavitriBai Phule Pune University</div>
                             <svg className='div-line' xmlns="http://www.w3.org/2000/svg" width="510" height="5" viewBox="0 0 510 5" fill="none">
                                      <path d="M0 4.46094H509.86V0.460938H0V4.46094Z" fill="#9D1414"/>
                             </svg>
                      </div> 

                     <div className='div-right-logo'></div>
                       
                    </div>
           </div>
       )
}
export default FrontPage;
