import React from 'react';
import keys from '../../assets/data/keyhigh';

const KeysLight = () => {
  return (
<>
    
       <div className='container'>
        <h2 className=' text-primaryColor font-[800] md:text-[30px] md:leading-[20px]'>What Happens At Global Smart Build Summit & Awards ?</h2>
        <p className='text_para font-[600] md:text-[25px]'>Key Highlights</p>
       <div className='grid grid-cols-2 '>
       
        {
        keys.map((item)=>
        <div className="max-w-md mt-[30px] lg:mt-[55px] mx-auto bg-white  shadow-md overflow-hidden md:flex rounded-tl-[50px] rounded-br-[50px] ">
        <div className="p-8 bg-primaryColor">
         <p className="mt-2 text-white">{item.desc}</p>
        </div>
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={item.image} alt="Image"/>
      </div>
      
      </div>
    )}
    </div>

    
    </div>
    
    </>
 


      
    
  );
}

export default KeysLight;
