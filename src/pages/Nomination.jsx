import React from 'react';
import nomination from '../../public/images/nomination.png'
import NominationForm from '../Components/nominationForm/NominationForm'
const Nomination = () => {
  return (
    <div className=' container bg-cover  bg-center  w-[1440px] h-[100%]' style={{backgroundImage:"url('./images/nomina.webp')" }}>
  <section>
    <div >
      <img src={nomination} alt=""  className='mx-auto z-10 w-[150px] h-[150px] mt-auto'/>
      <h2 className='text-white text-[40px] font-[700] mx-auto'>Nomination Form</h2>
    </div>
    </section>
    <section>
    <NominationForm/>
    </section>
    </div>
  );
}

export default Nomination;
