import React, { createContext, useState } from 'react';
import sublinks from './data';

export const AppContext = createContext();

export const ContextProvider = (props) => {
    const [data, setData] = useState(sublinks);
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(
        {
            currentMenu:{page:"",links:[]},
            position:{top:null,left:null},
            show:false,
        }
    );
        console.log(submenu);
    function showSidebar(){
        setSidebar(true);
    }
    
    function closeSidebar(){
        setSidebar(false);
    }
    function showMenu(position,text){
        const currentMenu = data.find((link)=>{
            if(link.page===text){
                return link;
            }
        })
        const newSubMenu = {
            currentMenu:currentMenu,
            position:position,
            show:true,
        }
        setSubmenu(newSubMenu);
    }
    function closeMenu(){
        setSubmenu({...submenu,show:false});
    }

    return (
        <AppContext.Provider
            value={{data,sidebar,submenu,showMenu,closeMenu,showSidebar,closeSidebar}}
        >
            {props.children}
        </AppContext.Provider>
    )
}