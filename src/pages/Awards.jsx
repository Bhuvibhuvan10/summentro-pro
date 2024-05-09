import React from 'react';
import awards from '../../public/images/awards.jpg'
import { IoLocationSharp ,IoCalendarOutline } from "react-icons/io5";
const Awards = () => {
  return (
    <div>
      <img src={awards} alt="" />

      <section className='bg-[#2C0157]'>
        <h2 className='text-white text-[20px] font-[700] mx-auto inline-block border-b-4 '><IoLocationSharp   className='mx-auto'/>Taj Santacruz, Mumbai</h2><br/>
        <h2 className='text-white text-[20px] font-[700] mx-auto '><IoCalendarOutline   className='mx-auto'/>
19th June 2024</h2>

        <div className='container border-b-2 block'>
        <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 p-4">
    <p className='text_para text-white justify-beween'>
    The #Time2Leap National Awards is one of the most prestigious awards recognized by the Government of India, with its wings spread nationally the awards over the past editions #Time2leap Awards has garnered the affirmations of being one of the most non-biased and spectacular award shows of the industry. The inclusion of infrastructure, warehousing, logistics and Telecom in
    </p>
      </div>
      <div className="col-span-1 p-4">
      <p className='text_para text-white justify-between'>
      the following addition will only take it a step further this year! This time #Time2Leap National Awards will host VVIP’s, Decision Maker’s, Industry Experts, Top Performers, Innovative Product Brands and State Department Heads in a submerged experience of soiree awards night and salute to the victory on taking a leap forward.
    </p>
      </div>
    </div>
        </div>
        <button className='btn2 text-black text-[20px]'>Nominate now</button>
      </section>
    </div>
  );
}

export default Awards;
