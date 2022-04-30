import React, {useState} from "react";
import './Sidebar.css';
import logoImg from '../../imgs/logo.png';
import {UilBars, UilEstate, UilSignOutAlt, UilX} from "@iconscout/react-unicons";
import {sidebarData} from "../../data/Data";
import {motion} from "framer-motion";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div
                className='bars'
                style={expanded ? {left:'60%'} :{left:'5%'}}
                onClick={()=>setExpanded(!expanded)}
            >
                {expanded ? (<UilX />) : (<UilBars />)}
            </div>
            <motion.div
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth<=768&&`${expanded}`}
            >
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
            </motion.div>
        </>
    );
};

export default Sidebar;