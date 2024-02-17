import React,{useState, useEffect} from 'react';
import './ScrollPage.css';
import Hod from './HOD/Hod';
import Alumni from './Alumni/Alumni';
import Admission from './Admission/Admission';
import Event from './Events/Event';
import { useNavigate } from 'react-router-dom';
import Campus from './Campus/Campus';
import Recruiter from '../Recruiter/Recruiter';

function ScrollPage(){  

     const [scrollToDiv, setScrollToDiv] = useState(null);
     const [isRecruiterOpen, setRecruiterOpen] = useState(false);
     const nav = useNavigate();

     useEffect(()=>{
             if(scrollToDiv){
               const yOffSet = scrollToDiv.offsetTop;
               const duration = 800; 
         
               const startTime = performance.now();
               const endTime = startTime + duration;
               console.log(endTime);
         
               function scrollStep(timestamp) {
                 const currentTime = Math.min(timestamp, endTime);
                 const progress = (currentTime - startTime) / duration;
                 window.scrollTo(0, yOffSet * progress);
         
                 if (currentTime < endTime) {
                   requestAnimationFrame(scrollStep);
                 }
               }
         
               requestAnimationFrame(scrollStep);
             }
             setScrollToDiv(null);
     },[scrollToDiv]);

     function toogleNav(){
            let nav = document.getElementById('navigation');
            if (nav.style.display === 'none' || nav.style.display === '') {
                nav.style.display = 'block';
            } else {
               nav.style.display = 'none';
             }
      }

      const openRecruiter = () => {
             setRecruiterOpen(true);
       };

      const closeRecruiter = () => {
            setRecruiterOpen(false);
       };

       return(
           <div className='scrl-page'>
                
                 <div className='back-ground'>
                   
                      <div className='logIn-btn'>
                        
                         <button className='Nav-bar-btn-mob' onClick={toogleNav}>NavBar</button>
                         <img src='https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png' width='100px' height='100px' alt='logo'/>
                        <div className='head-name'> SavitriBai Phule Pune University</div>
                        <button className='login' onClick={()=>nav('/login')}>Login</button>
                        <button  className='login' onClick={()=>{nav('/ProjectPage')}}>Projects</button>
                         <div>
                            <button className='login' onClick={openRecruiter}>Recruiter's Corner</button>
                            {isRecruiterOpen && <Recruiter onClose={closeRecruiter} />}
                        </div>
                     </div>

                       

                       <div className='back-img back-img-mob'><div className="Maths">Department Of Mathematics</div></div>
                  <div className='tab-box' id='navigation'>
                      <div className='nav-tabs'>
                           <button  className='tabs login-tb-mob' onClick={()=> nav('/login')}></button>
                           <div className='tabs ad' onClick={() => setScrollToDiv(document.getElementById('adm'))}></div>
                           <div className='tabs camp' onClick={() => setScrollToDiv(document.getElementById('camp'))}></div>
                           <div className='tabs eve' onClick={() => setScrollToDiv(document.getElementById('eve'))}></div>
                          <div className='tabs alm'  onClick={() => setScrollToDiv(document.getElementById('alm'))}></div>
                     </div>
                   </div>  

                  <div className='pages'>
                         <Hod/>
                        <div id='adm'> <Admission/></div>
                        <div  id='camp'><Campus/></div>
                        <div className='events' id='eve'> <Event/></div>
                      <div className='alumni' id='alm'><Alumni/></div>
                      <div className='final'>Department of Mathematics</div>
                  </div>
                 
                 </div>
                 <div id="end-btn" ><div id="end-scroll"  onClick={() => setScrollToDiv(document.getElementById('front'))} ></div></div>     
        </div>
       )
}
export default ScrollPage;