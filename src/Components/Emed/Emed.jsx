import React from 'react';
import emed from '../../assets/data/emed';
const Emed = () => {
  return (
    <div>
        <h2 className='text-primaryColor text-[38px] font-[800]'>Past Event Media</h2>
       <div className='grid grid-cols-5 mt-[30px] lg:mt-[55px] cursor-pointer' >
       
        
        {emed.map((item,index)=>
      
        <img  key={index} src={item.photo} alt="" className='w-[90px] h-[90px]  shadow-xl opacity-100 hover:opacity-50 hover:#4B4F58'/>
      )}
      
    
      </div>
    </div>
  );
}

export default Emed;
