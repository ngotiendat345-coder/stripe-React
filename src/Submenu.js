import React, { useContext, useEffect ,useRef, useState} from 'react';
import {AppContext} from './context';

function Submenu(){

    const submenuRef = useRef(null);
    const [column,setColumn] = useState('column-2');
    const {submenu} = useContext(AppContext);
    const {page,links} = submenu.currentMenu;
    const {top,left} = submenu.position;
    console.log(top,left);
    const {show} = submenu;
    //let column = `column-2`;
    useEffect(()=>{
        
        submenuRef.current.style.left=`${left}px`;
        submenuRef.current.style.top=`${top}px`;
        if(links.length===3){
            setColumn(`column-3`);
        }
        if(links.length===4){
            setColumn(`column-4`);
        }
    },[submenu])
    return (
        <aside className={show ? "submenu show" : "submenu"} ref={submenuRef} ><section>
                            <h4>{page}</h4>
                            <div className={`${column} sidebar-sublinks`}>
                                {links.map((a,index)=>{
                                    return (
                                        <a href={a.url} key={index}> {a.icon}{a.label}</a>
                                    )
                                })}
                            </div>
        </section></aside>
    )
}

export default Submenu;