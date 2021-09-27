import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'  
import './Navbar.css'
import Logo from '../asset/logo.png'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize',showButton)

    return (
        <> 
        <IconContext.Provider value={{ color:'#fff'}}>
        <div className="navbar">
                <div className ="navbar-container container"> 
                    <Link to ="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={Logo} alt='Payafrik logo' className="LogoImage"/>
                    </Link>
                    <div className ="menu-icon" onClick ={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                   <ul className ={click ? 'nav-menu active':'nav-menu'}>
                        <li className='nav-item'><Link to ="/faqs" className="nav-link"  onClick={closeMobileMenu} > FAQs         </Link> </li>
                        <li className='nav-item'><Link to ="/contact-us" className="nav-link"  onClick={closeMobileMenu} > ContactUs </Link></li> 
                        <li className='nav-item'><Link to ="/login" className="nav-link"  onClick={closeMobileMenu} >
                             <button type="button" className="btn btn-primary btn-lg p-2">Buy Electricity</button>
                        </Link></li> 
                   </ul>

                </div>
            </div> 
            </IconContext.Provider>
        </>
    )
}

 


export default Navbar;
