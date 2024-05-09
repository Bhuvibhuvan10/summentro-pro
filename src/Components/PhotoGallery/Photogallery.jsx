import Modal from './Modal';
import React ,{useState}from 'react';
import photo from '../../assets/data/photo';

const Photogallery = ({src}) => {
    const [isOpen, setIsOpen]=useState(false)

    const openModal =()=>{
        setIsOpen(true)
    }

    const closeModal=()=>{
        setIsOpen(false)
    }
  return (
    <div>
    <div className='grid grid-cols-9 mt-[30px] lg:mt-[55px] cursor-pointer' >
      {photo.map((item,index)=>
    
      <img  key={index} src={item.photo} alt="" onClick={openModal}className='w-[120px] h-[120px] m-3 shadow-xl opacity-100 hover:opacity-50 hover:#4B4F58'/>
    )}
    </div>
    {isOpen && <Modal src={src} onClose={closeModal}/>}
    </div>
  );
}

export default Photogallery;

