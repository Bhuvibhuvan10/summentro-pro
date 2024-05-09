import React from 'react';
import attend from '../../assets/data/attend'
import projects from '../../assets/data/projects'
import format from '../../assets/data/format'
const Project = () => {
  return (

    
    <div className='container bg-primaryColor mb-[-110px] '>

        {/* attend */}


        <h2 className='text-white text-[36px] text-center font-[600]'>Who Can Attend?</h2>
        <div className='grid grid-cols-4 '>
       
        {
        attend.map((item)=>
        <div className="max-w-md w-56 h-[150px] border border-white mt-[20px] lg:mt-[35px] mx-auto text-white  shadow-md shadow-white overflow-hidden md:block rounded-tl-[50px] rounded-br-[50px] ">
       
      <div>
        <img className=" w-20 h-15 mx-auto fill-white" src={item.image} alt="Image"/>
      </div>
      <div className="p-8 bg-primaryColor">
         <p className="mt-2 text-white text-[16px] font-[400]">{item.desc}</p>
        </div>
      
      </div>
    )}
    </div>


{/* format */}
    
    <div className='mt-[50px] border border-x border-white'>
    <h2 className='text-white text-[36px] text-center font-[600]'>Format</h2>
        <div className='grid grid-cols-4 '>
        {
        format.map((item)=>
        <div className="max-w-md w-56 h-[150px]  mt-[20px] lg:mt-[35px] mx-auto text-white   overflow-hidden md:block ">
       
      <div>
        <img className=" w-20 h-15 mx-auto fill-white" src={item.image} alt="Image"/>
      </div>
      <div className="p-8 bg-primaryColor">
         <p className="mt-2 text-white text-[16px] font-[400]">{item.desc}</p>
        </div>
      
      </div>
    )}
       </div>
    </div>


    {/* Projects */}
    
    <div className='mt-[50px] border border-white border-y-4'>
    <h2 className='text-white text-[36px] text-center font-[600]'>Project to Display</h2>
        <div className='grid grid-cols-4 '>
        {
        projects.map((item)=>
        <div className="max-w-md w-56 h-[150px]  mt-[10px] lg:mt-[25px] mx-auto text-white   overflow-hidden md:block ">
       
      <div>
        <img className=" w-20 h-15 mx-auto fill-white" src={item.image} alt="Image"/>
      </div>
      <div className="p-8 bg-primaryColor">
         <p className="mt-2 text-white text-[16px] font-[400]">{item.desc}</p>
        </div>
      
      </div>
    )}
       </div>
    </div>

{/* newsletter */}



    </div>

    
    
  );
}

export default Project;
