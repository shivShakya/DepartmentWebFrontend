import React from "react";
import FrontPage from "./FrontPage/FrontPage";
import ScrollPage from "./ScrollPage/ScrollPage";
import './MainPage.css';

function MainPage(){
      return(
          <div className="main">
                 <FrontPage />
                 <ScrollPage/>  
                 <div className="foot"></div>
          </div>
      )
}

export default MainPage;