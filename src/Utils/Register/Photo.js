import React, { useState, useRef } from 'react';
import { useImageContext } from './MyContext';


function Photo() {

  const { setImageBlobData } = useImageContext();
  const imageRef = useRef();
  const [selectedImage, setSelectedImage] = useState('https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png');


  const handleImageClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageBlobData(file);
      //setFileToBase(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageBlobData(file);
      //setFileToBase(file);
    }
  };

  const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
           setImageBlobData(reader.result);
    }
}

  return (
    <div onClick={handleImageClick} onDragOver={handleDragOver} onDrop={handleDrop} style={{ cursor: 'pointer' }} className='photo-div'>
      <img
        src={selectedImage}
        alt='Selected'
        ref={imageRef}
        className='photos'
        width={'300px'}
        height={'300px'}
      />
      <input
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
        ref={imageRef}
      />
    </div>
  );
}

export default Photo;
