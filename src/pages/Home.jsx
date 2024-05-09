import React from 'react';
import video from '../assets/Video-with-venue.mp4'
import PastList from '../Components/Past/PastList'
import Gs from '../assets/Gs.png'
import KeysLight from '../Components/KeyHigh/KeysLight';
import Project from '../Components/Project/Project';



const Home = () => {
  return (
    <>
    {/* Video */}
   <section>
   <video className="elementor-video mt-[-70pX]" src={video} autoplay="" loop=''></video>
   </section>

   {/* past edition */}
   <section className='bg-slate-100 mt-[-50px]'>
    <h1 className='text-primaryColor text-[30px] font-[700]'>Past Editions Supported By</h1>
   <PastList/>
   </section>

   {/* Gs */}
  
   <section className="hero__section  2xl:h-[800px] ">
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px]  items-center justify-between ">
{/* Gs Image */}

         <div className=" flex justify-end items-center  ms-[-10px] mt-[50px] lg:mt-[20px]   lg:flex-row lg:items-center gap-5  lg:gap-[30px] w-[600px] h-[100px] ">
            <img src={Gs} alt=""className='w-[500px]  ' />
          </div>

      {/*=========================  hero content ==============================*/}
            <div className='lg:w-[670px] justify-between ms-[-200px] ml-2.5 '>
              <p className=' text-primaryColor font-[800] md:text-[25px] md:leading-[20px] '>
              Development, Redevelopment and Regeneration
              </p>
              <p className='text_para'><strong>GSBS (Global Smart Build Summit and Awards – 7th Edition) </strong>aims to navigate the dynamic landscape, offering a comprehensive overview that encapsulates current market dynamics, regulatory shifts, economic influences, and evolving consumer preferences. We hope to bring every stakeholder involved in the construction industry to a common platform where they can explore the regulatory framework governing sustainable development, shedding light on government policies and legal considerations that shape the industry and participate in advanced innovation driven procurement goals laid down in the form of pre-scheduled B2B meetings.
              </p>
              <div className='flex justify-end space-x-7'>
              <button className='btn'>Read More</button>
              <button className='btn1 '>Download Brochure</button>
              </div>
            </div> 
          </div>
        </div>
      </section>

      {/* Key highlights */}

      <section>

        <KeysLight/>

      </section>

   {/* Project */}
   <section>
    <Project/>
   </section>
    </>
  );
}

export default Home;
