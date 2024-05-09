import React from 'react';
import {useEffect,useRef} from 'react';
import logo from '../../assets/Logo-website-header (1).png'
// import docLogo from '../../assets/doc-logo.png'
import {NavLink,Link} from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';

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

const Header = () => {
    const headerRef=useRef(null)
    const menuRef=useRef(null)
    

    const handleStickyHeader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80|| document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        handleStickyHeader()
        return ()=> window.removeEventListener('scroll',handleStickyHeader)
    });

    const toggleMenu=()=>menuRef.current.classList.toggle('show_menu')
  return (
    <header className="header flex items-center" ref={headerRef} >
    <div className='container'>
        <div className='flex items-center justify-between'>



            {/* ========================== logo ============================*/}



            <div>
            <img src={logo} alt="" className='w-35 h-20'    />
            </div>



                {/* Menu */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu} >
                <ul className='menu flex items-center gap-[2.7rem]'>
                {
                    navLinks.map((link,index)=>
                    <li key={index}>
                        <NavLink to={link.path} className={navClass=>
                            navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                                {link.display}
                                </NavLink>
                    </li>)
                }

                </ul>
            </div>



            {/* ==================== nav right =========================== */}
            <div className="flex items-center gap-4">



                <Link to='/login'>
                    <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px ] flex items-center justify-center rounded-[50px]'>Enquire Now</button>
                </Link>

                <span className='md:hidden' onClick={toggleMenu}>
                    <BiMenu className='w-6 h-6 cursor-pointer'/>
                </span>
                
            </div>
        </div>
    </div>

   </header>
  );
}

export default Header;
