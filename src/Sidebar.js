import React, { useContext } from 'react';
import { AppContext } from './context';
import { FaTimes } from 'react-icons/fa';
function Sidebar() {

    const {data, closeSidebar,sidebar} = useContext(AppContext);

    return (
        <div className= {sidebar? `show-wrapper slideBar-wrapper`:"slideBar-wrapper"}>
            <aside className="slideBar">
                <button className="btn-close" type="button"
                    onClick={closeSidebar}
                >
                    <FaTimes />
                </button>
                <div className="slideBar-links">
                    {data.map((item,index) => {
                        return (
                            <article key={index}>
                                <h4>{item.page}</h4>
                                <div className="links-container">
                                    {item.links.map((a,index)=>{
                                        return (
                                            <a href={a.url} key={index}>
                                                    {a.icon}
                                                    {a.label}
                                                </a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;