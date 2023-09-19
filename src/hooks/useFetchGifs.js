import { useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isloading, setIsLoading] = useState(true);

  const getImages = async()=>{
    const newImage = await getGifs(category);
    setimages(newImage);
    setIsLoading(false);
  }
  
  useEffect(() => {
    getImages();
    
  }, []);

  return {
    images,
    isLoading: isloading
  }
}
