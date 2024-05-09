import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Myslider from '../Components/MySlider/Myslider';
import Photogallery from '../Components/PhotoGallery/Photogallery';
import PastAss from '../Components/PastAssociation/PastAss';
import TwoColumnLayout from '../Components/TwoColumnLayout/TwoColumnLayout';

const PastEdition = () => {
  return (
    <div className=' bg-slate-200'>
      <section>
      <h2 className='text-primaryColor text-[38px] font-[800]'>Past Speakers</h2>
      <Myslider/>
      </section>

      <section>
      <h2 className='text-primaryColor text-[38px] font-[800]'>Past Delegates</h2>
        <Photogallery/>
      </section>

      <section>
      <h2 className='text-primaryColor text-[38px] font-[800]'>Past Associations</h2>
        <PastAss/>
      </section>

      <section>
        <TwoColumnLayout/>
      </section>
    </div>
  );
}

export default PastEdition;
