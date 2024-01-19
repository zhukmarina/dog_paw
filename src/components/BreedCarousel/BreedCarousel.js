import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from '@mui/material/Skeleton';
const BreedCarousel = ({ id }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=live_kssrbyIko7YpwOartoJZPYx2nHw3N8AQgYc2QgxYmSHsECmqg49E665tQREEndhU`
        );
        const data = await res.json();
        setImages(data.map((image) => image.url));
        console.log(data);
        setIsLoading(false); 
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width={640} height={300} />
      ) : (
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Breed ${index}`} />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default BreedCarousel;
