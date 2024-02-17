import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [imageBlob, setImageBlob] = useState(null);

  const setImageBlobData = (blob) => {
    setImageBlob(blob);
  };

  return (
    <ImageContext.Provider value={{ imageBlob, setImageBlobData }}>
      {children}
    </ImageContext.Provider>
  );
};
