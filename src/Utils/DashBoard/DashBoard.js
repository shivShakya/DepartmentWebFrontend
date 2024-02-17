import React, { useState , useEffect } from 'react';
import './DashBoard.css'; 
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Photo from '../Register/Photo';
import { useImageContext } from '../Register/MyContext';
import UpdateForm from './UpdateForm/UpdateForm';


function Dashbaord() {
    const [toggleSideBar ,setToggleSideBar] = useState(false);
	const [stories, setStories] = useState(null);
	const { imageBlob } = useImageContext();
	const [Content, setContent] = useState('');
    const [Topic ,setTopic] = useState('');
	const nav = useNavigate();
	const [overlay , setOverlay] = useState(false);
	const [overlayUpdate , setOverlayUpdate] = useState(false);
	const token = localStorage.getItem('token');
	const [filter , setFilter] = useState(false);
	const [filterRole , setFilterRole] = useState('');
	const [userData, setUserData] = useState({
        'id' : '',
        'Name': '',
        'Phone': '',
        'Email': '',
        'Image': '',
        'role': ''
    });
	const [count , setCount] = useState({ alumniCount : 0, studentCount : 0, teacherCount : 0 });
	const [data , setData] = useState([]);

	const [formData, setFormData] = useState({
        Title: '',
        Github_link: '',
        Sector: '',
        Description: '',
        File_path: null,
        Demo_link: '',
        Approved: 0,
        Student_id: userData.id,
    });

	useEffect(()=>{
		if(!token){
			 alert('not authorized');
			 nav('/login');
		}else{
			 UserDataLog();
			 fetchUserCounts();
		 }
		},[]);

	function UserDataLog() {
        if (token) {
            const decodeToken = jwtDecode(token);
            console.log({decodeToken});
            const { id , email  , Name, Phone, role ,Image } = decodeToken;
            console.log({decodeToken});
            setUserData({
                'id' : id ,
                'Name' : Name,
                'Phone': Phone,
                'Email': email,
                'Image' : Image ,
                'role': role
            });
        }
    }


	const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            File_path: file
        }));
    };

	const handleSubmitProject = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('project', JSON.stringify(formData));
        formDataToSend.append('image', imageBlob);

        try {
            const response = await fetch(`http://localhost:3000//project/postProject`, {
                method: 'POST',
                body: formDataToSend
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            alert('Form submitted successfully!');
       
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            alert('Form submission failed. Please try again.');
        }
    };

	const handleSubmitStories = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('image', imageBlob);
			formData.append('Topic' , Topic)
            formData.append('Content', Content);
            formData.append('createdBy', userData.Email);

            const response = await fetch(`http://localhost:5000/story/postStory`, {
                method: 'POST',
                body: formData
            });

			const data = await response.json();
			alert(data.message);
			
            if (response.ok) {
                window.location.reload();
            } 
        } catch (error) {
            console.error('Error submitting story:', error);
        }
    };

	useEffect(() => {
        const fetchStoriesByCreator = async () => {
            try {
                const response = await fetch(`http://localhost:5000/story/getStoriesByCreator/${userData.Email}`); 
               
				console.log({response});
                const data = await response.json();
				console.log({a : data.stories})
                setStories(data.stories);
            } catch (error) {
               console.log({error})
            }
        };

        setTimeout(()=>{
			fetchStoriesByCreator();
		},2000);

		console.log({stories});
    }, []);


	async function handleFilter(role){
		setFilter(true);
		setFilterRole(role);
		try {
			const response = await fetch(`http://localhost:5000/filter/${role}`); 
		   
			console.log({response});
			const data = await response.json();
			console.log({a : data})
			setData(data);
		} catch (error) {
		   console.log({error})
		}
	}

	const handleDeleteStory = async (storyId) => {
		try {
			const response = await fetch(`http://localhost:5000/deleteStory/${storyId}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error('Failed to delete story');
			}
			const deletedStory = await response.json();
			alert(deletedStory); 
		} catch (error) {
			console.error('Error deleting story:', error);
		}
	};
	
    // Total Count
	async function fetchUserCounts() {
		try {
			const response = await fetch('http://localhost:5000/user/userCounts'); 
			if (!response.ok) {
				throw new Error('Failed to fetch user counts');
			}
			const data = await response.json();
			console.log(data); 
			setCount(data);
		} catch (error) {
			console.error('Error fetching user counts:', error);

		}
	}
	function ToggleSideBar(){
		   setToggleSideBar(!toggleSideBar);
	}

	function ChooseTab(){
		const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

		allSideMenu.forEach(item=> {
			const li = item.parentElement;
		
			item.addEventListener('click', function () {
				allSideMenu.forEach(i=> {
					i.parentElement.classList.remove('active');
				})
				li.classList.add('active');
			})
		});	
	}

    function HandleLogOut(){
		localStorage.clear();
		nav('/login');
   }
   console.log({stories});
   console.log({data});
  return (
    <div className='dashboard'>
   <section id="sidebar" className= {toggleSideBar ? 'hide' : ''}>
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">{userData.role}</span>
		</a>
		<ul class="side-menu top">
			<li class="active" onClick={ChooseTab}>
				<a href="#" onClick={()=>{setFilter(false)}}>
					<i class='bx bxs-dashboard' ></i>
					<span class="text" >Dashboard</span>
				</a>
			</li>
		
			<li onClick={ChooseTab}>
				<a href="#" onClick={()=>handleFilter('Alumni')}>
					<i class='bx bxs-group' ></i>
					<span class="text" >Alumni</span>
				</a>
			</li>
			<li onClick={ChooseTab}>
				<a href="#" onClick={()=>handleFilter('Student')}>
					<i class='bx bxs-group' ></i>
					<span class="text" >Students</span>
				</a>
			</li>
			<li onClick={ChooseTab}>
				<a href="#" onClick={()=>handleFilter('Teacher')}>
					<i class='bx bxs-group' ></i>
					<span class="text" >Teachers</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li >
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout" >
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text" onClick={HandleLogOut}>Logout</span>
				</a>
			</li>
		</ul>
	</section>
     
  <section id="content">
		<nav>
			<i className='bx bx-menu' id='toggle-side' onClick={ToggleSideBar}></i>
			<a href="#" className="nav-link" >Info</a>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search..." />
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden />
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">

			</a>
		</nav>

		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" className="btn-download">
                    <i className='bx bx-upload'></i>
					{userData.role === 'Alumni'? <span className="text" onClick={()=>{setOverlay(true)}}>Upload your Stories</span> : <span className="text" onClick={()=>{setOverlay(true)}}>Upload your Projects</span> }
					{overlay && (
                        <div className="overlay" >
                            <div className="upload-form" >
                                  {
									   userData.role === 'Alumni' ? <div className='post-stories'>
										       <div class="share-container">
                                                <div class="photo-container">
                                                    <Photo />
                                                </div>
                                                <div class="input-container">
                                                    <input type="text" placeholder="Topic" onChange={(e)=>{setTopic(e.target.value)}} />
                                                    <textarea rows="5" cols="50" class="textarea-content" onChange={(e)=>{setContent(e.target.value)}} placeholder="Dear Alumni ! We encourage you to share anything you want . If you have a story we are here to listen . have something interesting to share we are there . Quotes To motivate us ? Always Yes ! Just Post !"></textarea>
	                                            	<div class="button-containerss">	
                                                        <button class="submit-buttonss" onClick={handleSubmitStories}>Submit</button>
														<button class="cancel-buttonss" onClick={()=>setOverlay(false)}>Cancel</button>
                                                    </div>
                                                </div>
	
                                            </div>
										</div> : <div className='post-projects'>
									          	<Photo />
                                                 <div className='form-fields'>
                                                     <input type='text' className='desc-text' name='Title' value={formData.Title} onChange={handleChange} placeholder='Title' />
                                                     <input type='text' className='desc-text' name='Github_link' value={formData.Github_link} onChange={handleChange} placeholder='Github Link' />
                                                     <input type='text' className='desc-text' name='Demo_link' value={formData.Demo_link} onChange={handleChange} placeholder='Demo Link' />
                                                     <input type='text' className='desc-text' name='Sector' value={formData.Sector} onChange={handleChange} placeholder='Sector' />
                                                     <input type='file' className='desc-text' name='File_path' onChange={handleFileChange} placeholder='File Path' />
                                                     <textarea className='textarea-content desc-text' rows={5} cols={5} name='Description' value={formData.Description} onChange={handleChange} placeholder='Description'></textarea>
                                                     <button onClick={handleSubmitProject} className='btn-form' type='submit'>Submit</button>
                                                 </div>
										</div>
								  }
                            </div>
                        </div>
                    )}
				</a>
			</div>

			<ul class="box-info">
			     <li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>{count.alumniCount}</h3>
						<p>Total Alumni</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>{count.studentCount}</h3>
						<p>Total Students</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>{count.teacherCount}</h3>
						<p>Total Alumini</p>
					</span>
				</li>
			</ul>


			{
				filter ? <div className="table-data">
						  <div className="order">
							       {
									 data.length > 0 ?   data.map((user,index)=>{
										   return <div className='todo User-data-app'>
											       <img src={user.Image} width={200} className='' height={200} alt='profile'/>
												   <div>
													    <ul className='User-data'>
															  <li>{user.FirstName} {user.MiddleName} {user.LastName}</li>
															  <li>{user.Email}</li>
															  <li>{user.Linkedin}</li>
															  <span className='status completed'>{user.Company}</span>
															  <span className='status completed'>{user.Position}</span>
															  <li>{user.Message}</li>
						
														</ul>
													</div>
										      </div>
									  }) : <div className="head">No Data found</div>
								   }  
						  </div>
				</div> :
				  


				  <div className="table-data">
				  <div className="order">
					  <div className="head">
						  <h3>Recent {userData.role === 'Alumni' ? 'Stories' : 'Projects'}</h3>
						  <i className='bx bx-search' ></i>
						  <i className='bx bx-filter' ></i>
					  </div>
					  <table>
						  <thead>
							  <tr>
								  <th>Photo</th>
								  <th>Topic</th>
								  <th>Date</th>
								  <th>Edit</th>
							  </tr>
						  </thead>
						  <tbody>
						  {
							   stories ? stories.map((story,index)=>{
											  return <tr>
											  <td>
												  <img src={story.Image} alt='story-tells'/>
											  </td>
											  <td>{story.Topic}</td>
											  <td>{story.DateTime}</td>
											  <td><span class="status completed" onClick={()=>handleDeleteStory(story._id)}>Delete</span></td>
										  </tr>
									 }) : <tr>
											<td>
												 No Story Found
											</td>
									 </tr>
							  }
						  </tbody>
					  </table>
				  </div>
				  <div class="todo">
					  <div class="head">
						  <h3>Profile</h3>
						  <i className='bx bx-plus' ></i>
						  <i className='bx bx-filter' ></i>
					  </div>
					  <div className="todo-list">
						  <li className="completed">
								   <img src={userData.Image} width={200} height={200} className='profile-pic' alt='your profile' />
						  </li>
						  <li className="not-completed">
							  <p>{userData.Name}</p>
							  <i class='bx bx-dots-vertical-rounded' ></i>
						  </li>
						  <li className="not-completed">
							  <p>{userData.Email}</p>
							  <i class='bx bx-dots-vertical-rounded' ></i>
						  </li>
						  <li className="not-completed">
							  <p>{userData.Phone}</p>
							  <i class='bx bx-dots-vertical-rounded' ></i>
						  </li>
						  <li className="completed">
								 <button className='btn-prof-update' onClick={()=>setOverlayUpdate(true)}>Update your profile</button>
								 {
									 overlayUpdate && (
										  <div className='overlay'>
													<div className='overlay-content'>
															<UpdateForm userData = {userData}  setOverlayUpdate={setOverlayUpdate}/>
													</div>
										  </div>
									 )
								 }
						  </li>
					  </div>
				  </div>
			  </div>
			}
		</main>
	
	</section>
    </div>
  );
}

export default Dashbaord;
