import React, { useState, useEffect } from 'react';
import './ProjectSection.css';
import { useNavigate } from 'react-router-dom';

function ProjectSection() {
  const url = process.env.REACT_APP_BACKEND;
  const [projectData, setProjectData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setInterval(()=>{
        fetchData();
    },5000);
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/bestFive/bestProjectList`); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProjectData(data.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log({projectData});

  return (
    <><div class="container-proj">
      {projectData.map((project, index) => (
        <div className='box' key={index}>
            <p><img width={100} height={100} src={"http://localhost:5000/images" + project.Image} alt={project.Title} /></p>
          <b>{project.Title}</b>
          <p>Description: {project.Description}</p>
          <p>Sector: {project.Sector}</p>
          <p>GitHub Link: <a href={project.GitHub_link}>{project.GitHub_link}</a></p>
          <p>Demo Link: <a href={project.Demo_link}>{project.Demo_link}</a></p>
        </div>
      ))}
    </div><button className='project-page-btn' onClick={() => { nav('/ProjectPage'); } }>Projects Section</button></>
  );
}

export default ProjectSection;
