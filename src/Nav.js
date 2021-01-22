import React, { useContext} from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import {AppContext} from './context';

function Nav(){
   // const link_button = useRef(null)
   // const navRef = useRef(null);

    const {showMenu,closeMenu,showSidebar} = useContext(AppContext);

    function setSubmenu(e){
        const top = e.target.getBoundingClientRect().bottom;
        const left = (e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().right)/2;
        const text = e.target.textContent;
        const position = {
            top:top,
            left:left,
        }
        console.log(position,text);
        showMenu(position,text);
    }
    function closeSubmenu(e){
        if(!e.target.classList.contains('link-button')){
            closeMenu();
        }
    }
    return (
        <nav className="nav" onMouseOver={closeSubmenu}>
        <div className="nav-container ">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <button className="btn" type="button"
                    onClick={showSidebar}
                >
                    <FaBars />
                </button>
            </div>
            <ul className="link-container" >
                <li>
                    <button className="link-button" onMouseOver={setSubmenu} >products</button>
                </li>
                <li>
                    <button className="link-button" onMouseOver={setSubmenu} >developers</button>
                </li>
                <li>
                    <button className="link-button" onMouseOver={setSubmenu} >company</button>
                </li>
            </ul>
            <button className="btn btn-signIn">
                sign in
            </button>
        </div>
    </nav>
    )
}

export default Nav;