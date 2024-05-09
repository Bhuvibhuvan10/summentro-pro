import React ,{useState}from 'react';
import assoc from '../../assets/data/assoc';
import Modal1 from './Modal1';
const PastAss = ({src}) => {
    const [isOpen, setIsOpen]=useState(false)

    const openModal =()=>{
        setIsOpen(true)
    }

    const closeModal=()=>{
        setIsOpen(false)
    }
  return (
    <div>
      <div>
    <div className='grid grid-cols-9 mt-[30px] lg:mt-[55px] cursor-pointer' >
        
      {assoc.map((item,index)=>
    
      <img  key={index} src={item.photo} alt="" onClick={openModal}className='w-[120px] h-[120px] m-3 shadow-xl opacity-100 hover:opacity-50 hover:#4B4F58'/>
    )}
    </div>
    {isOpen && <Modal1 src={src} onClose={closeModal}/>}
    </div>
    </div>
  );
}

export default PastAss;
