import React from 'react';
import past from '../../assets/data/past'
const PastList = () => {
  return (
    <div>
      <div className='flex mt-[30px] lg:mt-[55px]'>
      {past.map((item)=>
    
      <img src={item.photo} alt="" className='w-[120px] h-[120px] m-3 shadow-xl opacity-100 hover:opacity-50 hover:#4B4F58'/>
    )}
    </div>
    </div>
  );
}

export default PastList;
