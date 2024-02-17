import React from "react";
import './Campus.css';

function Campus(){
      
     return(
      <><div class="alm-cont">
      <div class="alm-box">
              <div className="content">
                      <div>Campus Life</div>
                      <div>Our mathematics department exemplifies the transformative power of education and determination. Through its infrastructure and events, we inspire current and future mathematicians with the success stories of our faculty and alumni, demonstrating the impact of perseverance in pursuit of knowledge.</div>
              </div>
      
              <div className="boxes">
                    
                      <div className="boxx infra-box">
                              <div className="heading h-2">Infrastructure</div>
      
                              <div className="p-frame">
                                      <div className="photo">
                                              <img src="./inf1.jpg" className="inf" alt="Italian Trulli" />
      
                                      </div>
                                      <div className="photo">
                                              <img src="./inf2.jpg" className="inf" alt="Italian Trulli" />
                                      </div>
      
                                      <div className="photo">
                                              <img src="./inf3.jpg" className="inf" alt="Italian Trulli" />
                                      </div>
                                      <div class="photo">
                                              <img src="./inf4.jpg" className="inf" alt="Italian Trulli" />
                                      </div>
                              </div>
                      </div>
                      <div class="boxx acad-box">
                              <div class="heading h-3">Academics</div>
      
                              <div class="p-frame">
                                      <div class="photo">
                                              <img src="/EVE1.jpg" class="inf" alt="Italian Trulli" />
                                      </div>
                                      <div class="photo">
                                              <img src="/EVE2.jpg" class="inf" alt="Italian Trulli" />
      
                                      </div>
                                      <div class="photo">
                                              <img src="/EVE3.jpg" class="inf" alt="Italian Trulli" />
      
                                      </div>
                                      <div class="photo">
                                              <img src="/EVE1.jpg" class="inf" alt="Italian Trulli" />
      
                                      </div>
                              </div>
                      </div>
              </div>
      </div>
      </div>
      </>
     )
}

export default Campus;