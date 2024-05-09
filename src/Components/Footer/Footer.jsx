import React from 'react';
import logo from '../../assets/GSBS-logo-final-green-2048x1640.png'
import {Link } from 'react-router-dom';
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
import { AiFillPhone,AiFillMail } from 'react-icons/ai'



const  quickLinks01=[
    {
      path:"/home",
      display:"Home"
    },
    {
      path:"/",
      display:""
    },
    {
      path:"/services",
      display:"Services"
    },
    {
      path:"/",
      display:"Blog"
    },
  ];

  const navLinks=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/pastEditions',
        display:'Past Editions'
    },
    {
        path:'/awards',
        display:"Awards"
    },
    {
        path:'/nomination',
        display:'Nomination'
    },
    {
        path:'/blog',
        display:'Blog'
    },
    {
        path:'/contact',
        display:'Contact'
    },
]

const  quickLinks03=[
    {
      path:"/",
      display:"Privacy Policy"
    },
    {
      path:"/",
      display:"Terms and Condition"
    },
    
  ];


const Footer = () => {
    
    const year=new Date().getFullYear()
  return (
    <div>

       <div className='bg-primaryColor'>
    <p className='text-white mx-auto text-[16px]'>Stay in the loop and never miss a beat! Subscribe to our newsletter for the latest updates, exclusive content, and exciting offers delivered straight to your inbox. Don’t miss out—join our community today!</p>

          <div className='space-x-2.5'>
        <input type="text" className='border-2 border-white  w-[300px] h-[50px] text-white bg-primaryColor' placeholder='Name'/>
        <input type="text" className='border-2 border-white w-[300px] h-[50px] text-white bg-primaryColor' placeholder='Email'/>
        <button className='btn2'>Subscirbe  NewsLetter</button>
          </div>

          </div>
        <footer className='pb-16 pt-10 bg-[#1F1F1F]'>
          
    <div className="container">
   

     
      <div className='grid grid-cols-3 m-4'>
        <div className=' items-center justify-between'>
        <img src={logo} alt="" className='w-35 h-20 items-center mx-auto'    />

          <p className='text-[16px] leading-6 font-[400] text-white mt-4 '>"India the 2nd most populous country in the world, is currently trending in the higher investment markets, climbing upwards towards becoming one of the biggest economies in the world. The current policies are massively uplifting the infrastructure &amp; real estate market in the region."</p>
        
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor'>
            Navigation Links
            </h2>

            < ul className=' justify-between '>
              {navLinks.map((item,index)=>
              <li key={index} className='text-white justify-between '>
                <Link to={item.path} className='text-[16px]  leading-7 font-[400] text-primaryColor'>
                  {item.display}
                </Link>
                </li>)}
            </ul>

            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor'>
             Useful Links
            </h2>

            < ul className=' justify-between mt-4'>
              {quickLinks03.map((item,index)=>
              <li key={index} className='text-white justify-between '>
                <Link to={item.path} className='text-[16px]  leading-7 font-[400] text-primaryColor'>
                  {item.display}
                </Link>
                </li>)}
            </ul>
        </div>
        <div className='float-left'>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor'>
          Contact for Marketing & Branding
            </h2>
                <div>
                  <h3 className='text-white justify-start'>
                    <ul>
                      <li>NITIKA SHAHI</li>
                      <li> <AiFillPhone/> 080 4157 4773</li>
                      <hr/>
                      <li><AiFillMail/>nitika@summentorpro.com</li>
                      <hr/>
                    </ul>
                  </h3>
                </div>

            <h2 className='mt-4 text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor'>
          Contact for Sales & Exhibiting
            </h2>

            <div>
                  <h3 className='text-white justify-start'>
                    <ul>
                      <li>SUHAIB AHMED</li>
                      <li> <AiFillPhone/> +91 74065 51114</li>
                      <hr/>
                      <li><AiFillMail/>suhaib@summentorpro.com</li>
                      <hr/>
                    </ul>
                  </h3>
                </div>
            
        </div>
        
      </div>
      
    </div>
 
  </footer>
  <div className='bg-black text-white h-20 '>
<p> 2022-2024 Global Smart Build Summit and Awards – 7th Edition . All rights reserved. Powered by Bradford, United Kingdom</p>
</div>
    </div>  
    

  );
}

export default Footer;
