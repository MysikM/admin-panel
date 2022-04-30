import React, {useState} from "react";
import './Sidebar.css';
import logoImg from '../../imgs/logo.png';
import {UilEstate, UilSignOutAlt} from "@iconscout/react-unicons";
import {sidebarData} from "../../data/Data";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className="sidebar">
            <div className="logo">
                <img className="logo__image" src={logoImg} alt="logo"/>
                <span className="logo__title">Sh<span>o</span>ps</span>
            </div>

            <div className="menu">
                {
                    sidebarData.map((menuItem, i) => (
                        <div key={i} className={`menu__item ${selected === i && 'menu__item--active'}`} onClick={() => setSelected(i)}>
                            <menuItem.icon/>
                            <span>{menuItem.heading}</span>
                        </div>
                    ))
                }
                <div className="menu__item">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;