import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import speakers from '../../assets/data/speakers';

const Myslider = () => {
    
    const settings = {    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
    
  return (
    <div className='image-slider mt-[80px]'>
    <Slider {...settings}>
     
        {
         speakers.map((item)=>
            
            <div className='block text-primaryColor'>           
            <img src={item.image} alt="" srcset="" className='w-[200px] h-[200px]' />
            <p>{item.name}</p>
            <p>{item.desc}</p>
            </div>
            
        )   
    }
    </Slider>
    </div>
  );
}

export default Myslider;
